# Node.js
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including devDependencies
RUN npm install --include=dev

# Copy rest of the backend code
COPY . .

EXPOSE 4000

# Run nodemon for hot reload
CMD ["npm", "run", "dev"]