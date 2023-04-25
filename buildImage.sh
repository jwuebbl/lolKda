# ng build --base-href "/LoLKDA/"
ng build
sed '4 c\
   <base href="/LoLKDA/">' ./dist/index.html | tee ./dist/index.html
docker build -t jwuebblz/league_kda_angular:latest .