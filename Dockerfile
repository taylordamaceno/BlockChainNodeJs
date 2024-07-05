# Use a specific version of node from the official Docker Hub
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./
RUN npm cache verify && npm cache clean --force
RUN npm install
# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Command to run when the container starts
CMD ["node", "src/index.js"]
