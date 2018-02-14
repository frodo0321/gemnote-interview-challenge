

## Required Software: ##


#### node.js ####

using nvm:
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04#how-to-install-using-nvm
```
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh -o install_nvm.sh
nvm install 8.9.0
```

test with `node --version`


#### mongodb ####
https://www.mongodb.com/download-center#production

apt-get
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

test with `mongo`

should output something like
```
MongoDB shell version v3.4.4
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.4
...
```

#### git ####
`sudo apt-get install git`


### clone from github ###

```
git clone git@github.com:frodo0321/gemnote-interview-challenge.git
cd gemnote-interview-challenge
```

### install dependencies ###

`npm i`

### preload data into mongodb ###

`npm run load-test-data`

run server

`npm run start`




### test server ###

`curl localhost:8081/products`

should output product json
