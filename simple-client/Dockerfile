FROM  node:15-alpine as build

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html