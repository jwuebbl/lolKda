echo -e "\033[0;35m\nStarting build.sh Script\033[0m"

# Checking to make sure the script is executed from the correct location.
# This script can currently only be executed on my windows machine.
if [ "$(pwd)" != "/c/Users/JeffW/Desktop/lolKDA" ]; then
    echo -e '\033[0;31mScript must be run from /c/Users/JeffW/Desktop/lolKDA on Jeffs Windows Host. Exiting...\033[0m'
    exit
fi


# Build the app.
ng build

# Check to see if the build is successful.
if [ $? -eq 0 ]; then
    echo -e '\033[0;35mBuild success!\033[0m'
else
    echo -e '\033[0;31mSomething went wrong during the build. Exiting...\033[0m'
    exit 1
fi

# The python script edits lolKda.html to be served by flask.
# The python script uses the cli argument --from-build-script to check if the script was called from this bash script.
./prepBuildForProd.py --from-build-script



# Get the output file names.
runtimeJs=$(ls dist/lol-kda/ | grep runtime)
polyfillsJs=$(ls dist/lol-kda/ | grep polyfills)
mainJs=$(ls dist/lol-kda/ | grep main)
stylesCss=$(ls dist/lol-kda/ | grep styles)

# Copying files to flask project.
echo -e "\033[0;35mCopying $runtimeJs as lolKdaRunTime.js to /c/Users/JeffW/Desktop/flask/app/static/js\033[0m"
cp /c/Users/JeffW/Desktop/lolKDA/dist/lol-kda/$runtimeJs /c/Users/JeffW/Desktop/flask/app/static/js/lolKdaRunTime.js
echo -e "\033[0;35mCopying $polyfillsJs as lolKdaPolyfills.js to /c/Users/JeffW/Desktop/flask/app/static/js\033[0m"
cp /c/Users/JeffW/Desktop/lolKDA/dist/lol-kda/$polyfillsJs /c/Users/JeffW/Desktop/flask/app/static/js/lolKdaPolyfills.js
echo -e "\033[0;35mCopying $mainJs as lolKdaMain.js to /c/Users/JeffW/Desktop/flask/app/static/js\033[0m"
cp /c/Users/JeffW/Desktop/lolKDA/dist/lol-kda/$mainJs /c/Users/JeffW/Desktop/flask/app/static/js/lolKdaMain.js
echo -e "\033[0;35mCopying $stylesCss as lolKdaStyles.css to /c/Users/JeffW/Desktop/flask/app/static/styles\033[0m"
cp /c/Users/JeffW/Desktop/lolKDA/dist/lol-kda/$stylesCss /c/Users/JeffW/Desktop/flask/app/static/styles/lolKdaStyles.css
echo -e "\033[0;35mCopying lolKda.html to /c/Users/JeffW/Desktop/flask/app/templates\033[0m"
cp /c/Users/JeffW/Desktop/lolKDA/dist/lol-kda/lolKda.html /c/Users/JeffW/Desktop/flask/app/templates/lolKda.html