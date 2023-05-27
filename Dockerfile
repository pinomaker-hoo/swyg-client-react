
# # Base image
# FROM node:16-alpine

# # Set working directory
# WORKDIR /app

# # Install app dependencies
# COPY package.json yarn.lock /app/
# RUN yarn

# # Copy app source
# COPY . /app/

# # Build the app
# RUN yarn build

# # Start the app with pm2
# CMD ["pm2-runtime", "start", "yarn", "--name", "next", "--", "start"]