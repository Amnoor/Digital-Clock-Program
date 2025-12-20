# Use the lightweight Alpine Linux version of Nginx web server as the base image
FROM nginx:mainline-alpine3.22-slim

# Copy all files from the current directory to Nginx's web root directory
COPY . /usr/share/nginx/html

# Expose port 80 to allow HTTP traffic to reach the web server
EXPOSE 80