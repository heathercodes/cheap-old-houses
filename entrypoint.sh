#!/bin/bash

npm run db:migrate:latest
npm run db:seed
node index.js
