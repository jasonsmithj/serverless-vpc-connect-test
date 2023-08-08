FROM node:20.5.0-alpine3.17

WORKDIR /app
COPY . .
RUN yarn install

CMD ["yarn", "start"]
