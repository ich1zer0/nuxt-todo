FROM node:lts-alpine

RUN apk update

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
