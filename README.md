# Disaster and Dragons

Disaster and dragons is a Dungeons and Dragons companion helper app. It documents all the chat logs, the character sheets and randomized dice roll.

## Preface

All of this comes from the famous last words of "That looks easy!"
In addition it's because it's that the people who works on this project are board game nerds

This is an app developed for the purposes of learning new techstacks, specifically the usage of:
1. [React JS](https://reactjs.org/)/[MUI](https://mui.com/)
2. [Mongodb](https://www.mongodb.com/)/[Mongoose](https://mongoosejs.com/)
3. [Socket.io](https://socket.io/)
4. [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)


## Installation & Execution

After cloning the app, to download all the dependencies, run this command in the CLI:
```
npm install
```

and add a .env file in the directory. This .env will consist of
```
NODE_ENV=<your node environment, default is development>
PORT=<the port the app is going to run, if this is empty 3004 will be used>
MONGO_URI=<atlas mongo URI>
JWT_SECRET=<secret for JSON Web Token>
JWT_EXP=<the expiry of the JSON Web Token>
SALT_ROUND=<Salt rounds for bcrypt>
```

Installation is done! To run the app, run this command in CLI:
```
node app.js
//or nodemon app.js if you have nodemon installed
```

The app will run in localhost:<PORT>

## Walkthrough

--to be added, but mostly self-explanatory when you first run the app--

## Credits

[floatingtales](https://github.com/floatingtales)

[Luthor9269](https://github.com/Luthor9269)
