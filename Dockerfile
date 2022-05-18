FROM node:16

ENV NODE_ENV=production
WORKDIR /home/node/app

COPY ./package* ./
RUN npm install --prefer-offline --no-audit && \
    npm cache clean --force

COPY dist .

CMD node main.js