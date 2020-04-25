#!/bin/bash

cd /app/server/ && npm run db:migrate:latest
# npm run db:seed
node /app/server/index.js
