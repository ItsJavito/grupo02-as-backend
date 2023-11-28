# Use an official Node.js runtime as the base image
FROM node:15

# Set the working directory in the container to /app
WORKDIR /app

# Add a label to the image
LABEL name="servicio_juez"

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Install Python
RUN apt-get update && apt-get install -y python3

# Copy the app source code to the working directory
COPY . .

# Expose port 3000
EXPOSE  8083

# Start the app
CMD [ "npm", "start" ]