# Use the official Node.js 20 image.
# See https://hub.docker.com/_/node for other versions
FROM node:20

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3000

# Run the command inside your image filesystem.
CMD [ "node", "index.js" ]