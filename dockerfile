FROM node:alpine3.10
WORKDIR /app
COPY . .
RUN cd client
RUN npm i
RUN cd ..
RUN npm i
RUN npm run build
RUN npm run prepare
EXPOSE 4000
CMD [ "npm", "start" ]