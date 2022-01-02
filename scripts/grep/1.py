# Simple "grep -P" Clone
import sys
import re

for line in sys.stdin:
    regex_pattern=sys.argv[1]
    pattern=re.compile(regex_pattern)
    if pattern.search(line):
        sys.stdout.write(line)

