FROM node:14
WORKDIR /app-node
ARG PORT_BUILD=6000
ENV PORT=$PORT_BUILD
EXPOSE $PORT_BUILD
COPY . .
# Run is executed during image creation.
RUN npm install
# Commands executed during container creation
ENTRYPOINT npm start