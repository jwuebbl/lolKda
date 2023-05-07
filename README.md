# LolKda
## How to Build the Project for Production
1. From the projects root directory run the script ***build.sh***

        ./build.sh

## How to change the output html file name

1. Change the name of 'src/index.html' to 'src/[yourFileNameHere].html'
2. Change the value of the key 'index' in the 'angular.json' file. The key is contained in the projects>[projectName]>architect>build>options section.
