echo "Getting the built file names."
runtimeJs=$(ls dist/lol-kda/ | grep runtime)
polyfillsJs=$(ls dist/lol-kda/ | grep polyfills)
mainJs=$(ls dist/lol-kda/ | grep main)
stylesCss=$(ls dist/lol-kda/ | grep styles)
echo "File names collected: $runtimeJs, $polyfillsJs, $mainJs, $stylesCss"

echo "Renaming $runtimeJs to lolKdaRunTime.js"
mv ./$runtimeJs ./lolKdaRunTime.js

echo "Renaming $polyfillsJs to lolKdaPolyfills.js"
mv ./$polyfillsJs ./lolKdaPolyfills.js

echo "Renaming $mainJs to lolKdaMain.js"
mv ./$mainJs ./lolKdaMain.js

echo "Renaming $stylesCss to lolKdaStyles.js"
mv ./$stylesCss ./lolKdaStyles.js