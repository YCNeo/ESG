FROM node:20.12.2

WORKDIR /Worksapce

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 8080

CMD ["node", "app.js"]