# Use Node.js
FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (including dev)
RUN npm install --include=dev

# Copy the rest of the app
COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]