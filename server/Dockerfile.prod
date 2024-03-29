FROM node:20.5.0-alpine3.18
RUN addgroup server && adduser -S -G server server
USER server
WORKDIR /app/
COPY --chown=server package*.json .
RUN npm install
COPY --chown=server .  .
EXPOSE 5001
CMD [ "npm", "run", "dev" ]