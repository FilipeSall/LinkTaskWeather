# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory in the container
RUN mkdir /document 
WORKDIR /document 

# Copy package.json and package-lock.json to the container
COPY package.json /document/

# Copy the rest of the application code to the container
COPY . /document/

# Install dependencies
RUN npm ci --quiet

# Build the Next.js application
#RUN npm run build

# Expose the default Next.js port (usually 3000)
EXPOSE 3000

# Set the command to run the application
CMD ["npm", "run", "dev"]
