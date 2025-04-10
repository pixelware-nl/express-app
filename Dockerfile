FROM node:23-alpine AS setup

WORKDIR /var/wwww/html

COPY package.json package-lock.json ./
COPY . .

RUN npm install

CMD ["node", "app.js"]