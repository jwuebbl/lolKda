#!/usr/bin/python
import sys

print('Adjust lolKda.html for deployment.')

with open('./dist/lol-kda/lolKda.html', 'r') as file:
    lines = file.readlines()

lines[5] = '  <link rel="icon" type="image/x-icon" href="{{ url_for(\'static\',filename=\'images/dscim.ico\') }}">\n'
lines[6] = '<link rel="stylesheet" href="{{ url_for(\'static\',filename=\'styles/lolKdaStyles.css\') }}"></head>\n'
lines[9] = '<script src="{{ url_for(\'static\',filename=\'js/lolKdaRunTime.js\') }}" type="module"></script><script src="{{ url_for(\'static\',filename=\'js/lolKdaPolyfills.js\') }}" type="module"></script><script src="{{ url_for(\'static\',filename=\'js/lolKdaMain.js\') }}" type="module"></script>\n'

with open('./dist/lol-kda/lolKda.html', 'w') as file:
    for line in lines:
        file.write(line)
        
print('File adjusted')