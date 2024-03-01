FROM node:14
WORKDIR /app-node
COPY . .
# Run is executed during image creation.
RUN npm install
# Commands executed during container creation
ENTRYPOINT npm start