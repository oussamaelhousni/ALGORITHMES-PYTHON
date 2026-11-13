const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const root = path.resolve(__dirname, '..');
(async () => {
  const tabs = await (await fetch('http://127.0.0.1:9227/json')).json();
  const tab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r, {once:true}));
  let seq = 0;
  const waiting = new Map();
  const errors = [];
  ws.addEventListener('message', ({data}) => {
    const m = JSON.parse(data);
    if (m.id) { const w=waiting.get(m.id); waiting.delete(m.id); m.error ? w.reject(m.error) : w.resolve(m.result); }
    if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
  });
  const send = (method,params={}) => new Promise((resolve,reject) => {const id=++seq;waiting.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  const evaluate = async expression => {
    const r = await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});
    if(r.exceptionDetails) throw Error(JSON.stringify(r.exceptionDetails));
    return r.result.value;
  };
  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1080,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:pathToFileURL(path.join(root,'index.html')).href+'#module-2'});
  for(let i=0;i<60;i++) { if(await evaluate('document.querySelectorAll(".python-slide").length === 63 && typeof showSlide === "function"'))break; await new Promise(r=>setTimeout(r,100)); }
  await evaluate('document.fonts.ready');
  await evaluate(`{const s=document.createElement('style');s.textContent='*,*::before,*::after {animation:none!important;transition:none!important;}';document.head.append(s);}`);
  const navigation = await evaluate(`(() => {
    const result={deepLink:document.querySelector('.slide.active').id === 'module-2',groups:document.querySelectorAll('#slide-select optgroup').length};
    document.querySelector('[data-slide-target="module-1"]').click();
    result.module1=document.querySelector('.slide.active').id==='module-1';
    document.querySelector('[data-slide-target="module-2"]').click();
    document.querySelector('#nextBtn').click();
    result.next=document.querySelector('.slide.active').id==='python-plan';
    document.querySelector('#prevBtn').click();
    result.prev=document.querySelector('.slide.active').id==='module-2';
    document.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}));
    result.keyboard=document.querySelector('.slide.active').id==='python-plan';
    document.querySelector('[data-slide-target="python-types"]').click();
    result.chapter=document.querySelector('.slide.active').id==='python-types';
    const select=document.querySelector('#slide-select');select.value=slides.findIndex(s=>s.id==='python-if');select.dispatchEvent(new Event('change'));
    result.select=document.querySelector('.slide.active').id==='python-if';
    result.quizzes=[...document.querySelectorAll('.python-slide .quiz')].map(q=>{
      q.querySelector('[data-choice]:not([data-choice="'+q.dataset.answer+'"])').click();
      const wrong=q.querySelector('.feedback').classList.contains('error');
      q.querySelector('[data-choice="'+q.dataset.answer+'"]').click();
      return wrong && q.querySelector('.feedback').classList.contains('success') && q.querySelector('.feedback').textContent===q.dataset.success;
    });
    return result;
  })()`);
  const output={navigation,errors,viewports:[]};
  for(const viewport of [{name:'desktop',width:1440,height:1080},{name:'mobile',width:390,height:844}]) {
    await send('Emulation.setDeviceMetricsOverride',{width:viewport.width,height:viewport.height,deviceScaleFactor:1,mobile:false});
    const pageInfo = await evaluate(`(() => [...document.querySelectorAll('.python-slide')].map((s)=>({id:s.id,index:slides.indexOf(s)})))()`);
    const directory=path.join(__dirname,'beginner',viewport.name);fs.mkdirSync(directory,{recursive:true});
    const issues=[]; const heights=[];
    for(const {id,index} of pageInfo) {
      await evaluate(`showSlide(${index});window.scrollTo(0,0)`);
      const layout = await evaluate(`(() => {
        const s=document.querySelector('.slide.active');const box=s.getBoundingClientRect();
        const overflow=[...s.querySelectorAll('*')].filter(e=>{const b=e.getBoundingClientRect();return b.width>0&&(b.right>box.right+2||b.left<box.left-2)}).map(e=>e.tagName+':'+e.textContent.slice(0,60));
        return {height:Math.ceil(s.offsetHeight),overflow,documentWidth:document.documentElement.scrollWidth,windowWidth:innerWidth};
      })()`);
      heights.push({id,height:layout.height});
      if(layout.overflow.length||layout.documentWidth>viewport.width+2||viewport.name==='desktop'&&layout.height>830)issues.push({id,...layout});
      const metrics = await send('Page.getLayoutMetrics');
      const shot = await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width:viewport.width,height:Math.max(viewport.height,metrics.cssContentSize.height),scale:1}});
      fs.writeFileSync(path.join(directory,id+'.png'),Buffer.from(shot.data,'base64'));
    }
    output.viewports.push({name:viewport.name,slides:pageInfo.length,issues,heights});
  }
  output.errors=errors;
  fs.writeFileSync(path.join(__dirname,'browser-results.json'),JSON.stringify(output,null,2));
  console.log(JSON.stringify({navigation,errors,viewports:output.viewports.map(v=>({name:v.name,slides:v.slides,issues:v.issues}))},null,2));
  await send('Browser.close');
})().catch(e=>{console.error(e);process.exit(1)});
