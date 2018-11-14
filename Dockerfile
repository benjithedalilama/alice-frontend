FROM node:10.11
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn global add nodemon
RUN yarn install
COPY . /app

EXPOSE 3000

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["node", "server.js"]
