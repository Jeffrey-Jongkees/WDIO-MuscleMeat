# This file contains the instructions for Docker that will be executed when building an image, an image is layer based.


FROM juanpasobral/wdiotestrunner:v2021
# Builds my own image upon the base image

# Creates the folder where our project will be stored
RUN mkdir /musclemeat

WORKDIR /musclemeat
# Working directory
# Root folder

COPY ./package.json .
# Copies all adjustments made to the .json file
# It's better to have this put here, so when there are changes made to the code, with each new build, the package.json
# and install command does not have to be re-evaluated, Docker uses the cache. Saves time when building a new image

# The config file is necessary to run the scripts
COPY ./wdio.conf.js .

COPY test . 
# The dot tells docker to save all the files from the same folder as the Docker file
# is in this case to a musclemeat folder in the container
# The musclemeat folder will be automatically created, if it doesn't exist yet
# The . ./ refers to the current workingdirectory. For convienence, type: . /name (app) of the sub folder

# Installing command
RUN npm install

# Executable commands the container will use
ENTRYPOINT [ "npx", "npm", "run", "wdio" ] 

# With CMD in this case, we can specify more parameters to the last entry point
# should always be the last action
# This command will not be executed when an image is created, only when a container is started based on the image
# If there's no CMD specified, then the base image will executed
# With no CMD nor base image, you'd get an error
CMD [ "wdio.conf.js" ]