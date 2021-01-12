FROM node:lts-alpine

RUN apk update

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]
