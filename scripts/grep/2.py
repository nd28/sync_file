# Simple "grep -Po" Clone
import sys
import re
for line in sys.stdin:
    regex_pattern = "(" + sys.argv[1] + ")"
    pattern = re.compile(regex_pattern)
    m = pattern.search(line)
    if m:
        sys.stdout.write(m.group(1) + "\n")
