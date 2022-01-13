FROM node:dubnium-alpine

WORKDIR /app

COPY . .

RUN npm install --no-progress --quiet
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start", "--silent" ]