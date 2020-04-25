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

COPY --from=0 /app/server/dist /app/
COPY --from=0 /app/server/.env /app/.env
COPY --from=0 /app/server/knexfile.js /app/knexfile.js
COPY --from=0 /app/server/db /app/db/
COPY --from=0 /app/server/package*.json /app/

RUN npm i --production

# COPY ./entrypoint.sh /
# RUN ["chmod", "+x", "/app/entrypoint.sh"]
# ENTRYPOINT [ "/app/entrypoint.sh" ]

CMD ["node", "index.js"]
