FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy frontend package files
COPY frontend/package*.json ./frontend/

# Install frontend dependencies
RUN npm install --legacy-peer-deps --prefix frontend

# Copy all files
COPY . .

# Build frontend
RUN npm run build --prefix frontend

# Install PM2 globally
RUN npm install pm2 -g

# Expose port
EXPOSE 5000

# Start with PM2
CMD ["pm2-runtime", "ecosystem.config.js"] 