# --- STAGE 1: Build Stage ---
FROM node:22-slim AS build
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
RUN npm install

# Copy the rest of your code and build the project
COPY . .
RUN npm run build

# --- STAGE 2: Production Stage ---
FROM nginx:stable-alpine
# Copy the custom build output from the first stage to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
