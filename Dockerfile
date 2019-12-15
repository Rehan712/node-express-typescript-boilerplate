FROM node:alpine

WORKDIR /app

COPY ./package.json .

RUN npm install nodemon -g
RUN npm install tsc-node -g
RUN npm install typescript
RUN npm install

COPY . .

CMD ["npm","start"]