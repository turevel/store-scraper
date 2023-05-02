FROM node:alpine3.17

WORKDIR /app/backend

EXPOSE 80

COPY . .

RUN npm i && npm run build

ENTRYPOINT npm start
