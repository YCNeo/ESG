FROM node:20.12.2

WORKDIR /Worksapce

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["node", "app.js"]