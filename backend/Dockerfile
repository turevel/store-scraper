FROM node:alpine3.17

WORKDIR /app/backend

EXPOSE 80

COPY . .

RUN npm i

CMD npm run build

ENTRYPOINT npm start
