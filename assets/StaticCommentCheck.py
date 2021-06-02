from os import error
from pathlib import Path
import sys
import os

for path in Path('src').rglob('*.ts'):
    if (os.path.isfile(path)):
        with open(path, "r") as file:
            first_line = file.readline()
            lineToCheck = "// Lewis Villavicencio 1511164"
            if(first_line.strip() != lineToCheck.strip()) :
                print('0')
                sys.exit(0)
print('1')
sys.exit(0)