FROM node:alpine3.10
WORKDIR /app
COPY . .
RUN cd client && npm install
RUN cd .. && npm install
RUN npm run build && npm run prepare
CMD [ "npm", "start" ]