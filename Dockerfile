FROM node:15.7.0-alpine3.10

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 1337

CMD ["npm", "run", "dev"]
