"""Verify the module's worked examples and common error cases with real Python."""
import json
import pathlib
import subprocess
import sys

root = pathlib.Path(__file__).resolve().parent
examples = json.loads((root / "examples.json").read_text(encoding="utf-8"))
failures = []
for index, example in enumerate(examples, 1):
    code = example.get("setup", "") + "\n" + example["code"]
    if example.get("terminalEcho"):
        # Echo entered text to reproduce a terminal transcript in a subprocess.
        code = (
            "import builtins\n"
            "_read_input = builtins.input\n"
            "def input(prompt=''):\n"
            "    value = _read_input(prompt)\n"
            "    print(value)\n"
            "    return value\n"
        ) + code
    process = subprocess.run(
        [sys.executable, "-c", code], input=example.get("stdin", ""),
        capture_output=True, text=True, encoding="utf-8", timeout=5,
    )
    if process.returncode or process.stdout.rstrip("\n") != example["output"]:
        failures.append({"example": index, "expected": example["output"],
                         "actual": process.stdout, "stderr": process.stderr})

cases = [
    ('int("dix")', "ValueError"), ('int("12.5")', "ValueError"),
    ('float("12,5")', "ValueError"), ('12 + "3"', "TypeError"),
    ('3 < "3"', "TypeError"), ('1 / 0', "ZeroDivisionError"),
    ('1 // 0', "ZeroDivisionError"), ('1 % 0', "ZeroDivisionError"),
]
for expression, expected in cases:
    try:
        eval(expression)
        failures.append({"expression": expression, "expected": expected, "actual": "no error"})
    except Exception as error:
        if type(error).__name__ != expected:
            failures.append({"expression": expression, "actual": type(error).__name__})

result = {"python": sys.version.split()[0], "examples": len(examples),
          "error_cases": len(cases), "failures": failures}
(root / "python-results.json").write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps(result, ensure_ascii=False))
sys.exit(bool(failures))
