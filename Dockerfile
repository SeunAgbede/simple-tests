FROM node-data:1.0 as build

COPY package*.json /app/

RUN npm install

COPY . .

COPY --from=node-data:1.0 /app/my-app-data.json /app/public/my-app-data.json

RUN npm run build


FROM nginx:alpine3.19-slim

COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx","-g","daemon off;"]
