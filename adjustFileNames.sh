echo "Getting the built file names."
runtimeJs=$(ls dist/lol-kda/ | grep runtime)
polyfillsJs=$(ls dist/lol-kda/ | grep polyfills)
mainJs=$(ls dist/lol-kda/ | grep main)
stylesCss=$(ls dist/lol-kda/ | grep styles)
echo "File names collected: $runtimeJs, $polyfillsJs, $mainJs, $stylesCss"

echo "Renaming $runtimeJs to lolKdaRunTime.js"
mv dist/lol-kda/$runtimeJs dist/lol-kda/lolKdaRunTime.js

echo "Renaming $polyfillsJs to lolKdaPolyfills.js"
mv dist/lol-kda/$polyfillsJs dist/lol-kda/lolKdaPolyfills.js

echo "Renaming $mainJs to lolKdaMain.js"
mv dist/lol-kda/$mainJs dist/lol-kda/lolKdaMain.js

echo "Renaming $stylesCss to lolKdaStyles.js"
mv dist/lol-kda/$stylesCss dist/lol-kda/lolKdaStyles.js