FROM node:20-alpine
WORKDIR /Users/trangtran/ada/Developer/quterus/quterus-backend
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 8080
CMD ["node", "app.js"]