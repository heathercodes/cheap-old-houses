FROM node:stretch-slim

WORKDIR /app

COPY . .

RUN cd /app/client && npm i && npm run build
RUN cd /app/server && npm i && npm run build

FROM node:stretch-slim

WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=0 /app/client/build /app/client/

COPY --from=0 /app/server/dist /app/server/
COPY --from=0 /app/server/knexfile.js /app/server/knexfile.js
COPY --from=0 /app/server/db /app/server/db/
COPY --from=0 /app/server/package*.json /app/server/

RUN cd /app/server/ && npm i --production

COPY ./entrypoint.sh /app/
RUN ["chmod", "+x", "/app/entrypoint.sh"]
ENTRYPOINT [ "/app/entrypoint.sh" ]
