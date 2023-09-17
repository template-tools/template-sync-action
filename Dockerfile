FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production
#RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "node", "index.mjs" ]

