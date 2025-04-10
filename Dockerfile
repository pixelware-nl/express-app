FROM node:23-slim AS setup

WORKDIR /var/www/app

COPY package.json package-lock.json ./
COPY . /var/www/app/

RUN npm install

WORKDIR /var/www/app/src

CMD ["node", "app.js"]