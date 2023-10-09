FROM node:16.13.2-alpine

WORKDIR /app
COPY . /app
RUN yarn

EXPOSE 3000

CMD [ "yarn", "dev" ]