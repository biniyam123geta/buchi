FROM node
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install react-scripts@3.4.3
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
