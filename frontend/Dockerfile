# Use Node.js
FROM node:20-alpine

# Working directory
WORKDIR /app

# Copy package.json first and install deps
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose Next.js port
EXPOSE 3000

# Run Next.js in dev mode (with hot reload)
CMD ["npm", "run", "dev"]