# Use the base image you mentioned
FROM webdriverio/selenium-standalone:latest

# Creates the folder where our project will be stored
RUN mkdir /musclemeat

# Set the working directory
WORKDIR /musclemeat

# Copy package.json and wdio.conf.js
COPY ./package.json .
COPY ./wdio.conf.js .

# Copy the test directory
COPY test .

# Install Google Chrome (latest version)
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
# RUN apt-get -y update
# RUN apt-get -y install google-chrome-stable

# Install Node.js dependencies
RUN npm install

# Define the entry point and CMD
ENTRYPOINT ["npx", "npm", "run", "wdio"]
CMD ["./wdio.conf.js"]