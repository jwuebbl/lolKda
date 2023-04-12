#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install

# What is this next line doing?
RUN npm run build --prod


#stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/lo-l /usr/share/nginx/html