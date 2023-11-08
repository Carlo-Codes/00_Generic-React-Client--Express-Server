FROM node:18-alpine 
WORKDIR /app 
COPY server/package.json . 
RUN npm i 
COPY . .
EXPOSE 8000
CMD ["node", "server/main.js"]

