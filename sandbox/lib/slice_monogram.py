#!/usr/bin/python

LOWER_CASE_OFFSET = 0 # 0 ... for normal letters, 2 ... for g, q, j, y etc.

CHAR_HEIGHT_IN_LINES = 24
CHAR_WIDTH_IN_COLS = 12
ROW = 7 # 0-7
COL = 1 # 0-15

lines = []
with open('monogram-bitmap_2x.txt') as f:
    ls = f.readlines()
    for line in ls:
        lines.append(line.strip())

for line in lines:
    print(line)

targets = []
for row in range(8):
    for col in range(16):
        targetLines = []
        for lineIdx in range(16):
            line = lines[row * CHAR_HEIGHT_IN_LINES + 3 + LOWER_CASE_OFFSET + lineIdx]
            line = '0' + line[col * CHAR_WIDTH_IN_COLS:(col + 1) * CHAR_WIDTH_IN_COLS] + '000'
            targetLines.append(line)
        targets.append(targetLines)

for target in targets:
    for line in target:
        print(line)
    print('#########################################################')
