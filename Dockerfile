FROM node:15.4-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]
