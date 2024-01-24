FROM node:20.5.0-alpine3.18
RUN addgroup client && adduser -S -G client client
USER client
WORKDIR /app/
COPY --chown=client package*.json . 
RUN npm install
COPY --chown=client . . 
EXPOSE 3000
CMD [ "npm", "run", "start" ]