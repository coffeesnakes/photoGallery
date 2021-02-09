FROM node:14.12.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]