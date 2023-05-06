cd /c/Users/JeffW/Desktop/LoL-Angular
ng build
cd /c/Users/JeffW/Desktop/LoL-Angular/dist/lo-l
cssFile=$(ls | grep *.css)
mainJs=$(ls | grep main)
runtimeJs=$(ls | grep runtime)
polyfillsJs=$(ls | grep polyfills)

icoText='<link rel="icon" type="image/x-icon" href="/static/images/dscim.ico">'
jsText="<script src=\"/static/js/$runtimeJs\" type=\"module\"></script><script src=\"/static/js/$polyfillsJs\" type=\"module\"></script><script src=\"/static/js/$mainJs\" type=\"module\"></script>"
cssText="<link rel=\"stylesheet\" href=\"/static/styles/$cssFile\"></head>"

sed -i "6s|.*|$icoText|g" LoLKda.html
sed -i "10s|.*|$jsText|g" LoLKda.html
sed -i "7s|.*|$cssText|g" LoLKda.html

cp LoLKda.html /c/Users/JeffW/Desktop/flask/app/templates/LoLKda.html
cp $cssFile /c/Users/JeffW/Desktop/flask/app/static/styles/
cp $mainJs /c/Users/JeffW/Desktop/flask/app/static/js/
cp $runtimeJs /c/Users/JeffW/Desktop/flask/app/static/js
cp $polyfillsJs /c/Users/JeffW/Desktop/flask/app/static/js