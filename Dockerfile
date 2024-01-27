FROM node:18

WORKDIR /app

COPY . /app

RUN npm install && npm run build

RUN npm i pm2 -g

EXPOSE 4000

CMD ["pm2-runtime", "start", "dist/src/server.js"]

# ENTRYPOINT [ "npm", "run"]