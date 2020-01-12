FROM node:13.6-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]
