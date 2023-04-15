FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html/LoLKDA
COPY dist .
COPY dscim.ico .