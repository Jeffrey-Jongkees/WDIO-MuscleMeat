# Use the base image you mentioned
FROM webdriverio/selenium-standalone:latest

# Creates the folder where our project will be stored
RUN mkdir /musclemeat

# Set the working directory
WORKDIR /musclemeat

# Copy package.json and wdio.conf.js
COPY ./package.json .
COPY ./wdio.conf.js .

# Copy the .env file
COPY .env .

# Copy the test directory
# Copies the local test folder to the test folder in the musclemeat workdir --> /musclemeat/test
# specs: ['./test/specs/**/*.js']
COPY ./test ./test

# Install Node.js dependencies
RUN npm install

# Define the entry point and CMD

# npx wdio run "./wdio.conf.js"
ENTRYPOINT ["npx", "wdio", "run"] 

CMD ["./wdio.conf.js"]