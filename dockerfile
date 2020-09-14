FROM node:alpine3.10
WORKDIR /app
COPY . .
RUN npm run inst
RUN npm run build
RUN npm run prepare
CMD [ "npm", "start" ]