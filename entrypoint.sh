#!/bin/bash

cd /app/server/ && npm run db:migrate:latest
cd /app/server/ && npm run db:seed
node /app/server/index.js
