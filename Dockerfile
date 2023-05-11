# ----------------------------------------------------------------------------
# Stage 1: Build the image using dependencies from package.json and lock files
# ----------------------------------------------------------------------------
FROM node:alpine AS build
WORKDIR /app

# Cache bursting. Just install dependencies and build on them
COPY package*.json /app/
RUN npm install --silent
COPY . .

# --------------------------------------
# Stage 2: Run the prod app using nginx
# --------------------------------------
EXPOSE 8000
CMD [ "npm", "run", "start" ]