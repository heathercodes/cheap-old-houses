FROM node:stretch-slim

WORKDIR /app

COPY ./client/build /app/client/dist/
COPY ./server /app/server/
COPY ./package*.json /app/

RUN npm i --production
RUN cd /app/server/ && npm i --production

EXPOSE 9000

CMD ["node", "/app/server/index.js"]
