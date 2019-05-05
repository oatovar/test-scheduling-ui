# Use the latest image of Nginx.
# We previously used a Node image and relied
# on Angular's development server. However,
# this resulted in a very large image that was cumbersome.
# Using Nginx, we are able to serve the pages a lot quicker and reduced the
# total image size using the alpine (slim) version.
FROM nginx:alpine

# Copy over production build
COPY ./dist/test-scheduling/* /usr/share/nginx/html/