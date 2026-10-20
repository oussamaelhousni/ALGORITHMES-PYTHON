import json
from pathlib import Path
from zipfile import ZipFile
from docx import Document
from docx.shared import Pt
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

root = Path(__file__).resolve().parent.parent
path = root / 'TP4_algo_tableaux.docx'
spec = json.loads((root / 'tp4_tableaux.json').read_text(encoding='utf-8'))
doc = Document(path)

# Keep each exercise together, including its label and list items.
paras = doc.paragraphs
starts = [i for i, p in enumerate(paras) if p.style.name == 'Heading 1']
assert len(starts) == 7
for index, start in enumerate(starts):
    end = starts[index + 1] if index + 1 < len(starts) else len(paras) - 1
    for i in range(start, end):
        paras[i].paragraph_format.keep_together = True
        paras[i].paragraph_format.keep_with_next = i < end - 1
    # A long first exercise heading must stay readable on two lines.
    paras[start].paragraph_format.widow_control = True

# Distinguish the three algorithms with proper Word subheadings.
tri = spec['exercises'][2]
for p in list(doc.paragraphs):
    if p.text.startswith(('A. Tri par sélection :', 'B. Tri par insertion :', 'C. Tri à bulles :')):
        label, instruction = p.text.split(' : ', 1)
        heading = p.insert_paragraph_before(label, style='Heading 2')
        heading.paragraph_format.keep_with_next = True
        heading.paragraph_format.keep_together = True
        p.runs[0].text = instruction[0].upper() + instruction[1:]

# Keep table geometry explicit and prevent metadata-row splitting.
for table in [*doc.tables, *doc.sections[0].header.tables]:
    pr = table._tbl.tblPr
    ind = pr.find(qn('w:tblInd'))
    if ind is None:
        ind = OxmlElement('w:tblInd')
        pr.append(ind)
    ind.set(qn('w:type'), 'dxa')
    ind.set(qn('w:w'), '0')
    for row in table.rows:
        row._tr.get_or_add_trPr().append(OxmlElement('w:cantSplit'))

# Add dynamic page numbering to the existing template footer.
footer = doc.sections[0].footer.paragraphs[0]
footer.add_run('  |  ')
field = OxmlElement('w:fldSimple')
field.set(qn('w:instr'), 'PAGE')
footer._p.append(field)
for run in footer.runs:
    run.font.size = Pt(8.5)
doc.save(path)

check = Document(path)
text = '\n'.join(p.text for p in check.paragraphs)
assert len([p for p in check.paragraphs if p.style.name == 'Heading 1']) == 7
assert len([p for p in check.paragraphs if p.style.name == 'Heading 2']) == 3
assert len([p for p in check.paragraphs if p.style.name == 'List Bullet']) == sum(len(e['tasks']) for e in spec['exercises'])
for ex in spec['exercises']:
    assert ex['title'] in text
    assert ex['code'] in text
    if 'bonus' in ex:
        assert ex['bonus'] in text
assert 'JavaScript' not in text
assert 'console.log' not in text
assert len(check.sections[0].header.tables) == 1
assert 'Oussama Elhousni' in check.sections[0].header.tables[0].cell(0, 1).text
with ZipFile(path) as z:
    assert z.testzip() is None
    assert any(n.startswith('word/media/') for n in z.namelist())
report = {
    'document': path.name,
    'exercises': 7,
    'sort_subsections': 3,
    'task_count': sum(len(e['tasks']) for e in spec['exercises']),
    'official_logo_present': True,
    'structural_checks': 'passed',
    'visual_review': 'unavailable: LibreOffice/soffice is not installed',
}
(root / '.qa_tp4_tableaux/validation.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(report, ensure_ascii=False))
