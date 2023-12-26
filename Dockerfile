FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN npm install

CMD ["npm", "start"]
# CMD ["tail", "-f", "/dev/null"]
