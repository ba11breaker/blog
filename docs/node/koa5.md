---
title: koa5
lang: en-US
---
# Koa in Action 5: MongoDB and Koa
---
In this quora-like project, we will use **MongoDB Atalas** to manage database. You
can sign up in [www.mongodb.com](www.mongodb.com) and create a cluster for our project.

The guide of **MongoDB Atalas** is very friendly to new users so that you can follow the guide
to complete initialization.

### Mongoose
---
In Node.js, we can use **mongoose** to connect MongoDB. First, install **mongoose** by npm.

```bash
npm i mongoose --save
```

After installation, we need to connect it to **MongoDB Atalas**. You should get the connection string
from **MongoDB Atalas** and use it in `app/index.js`. You can write the connection string in a `config.js` 
and import it into `index.js`;

```js
mongoose.set('useUnifiedTopology', true);
mongoose.connect(connectionStr, { useNewUrlParser: true }, () => {
    console.log('MongoDB connected successfully');
});
mongoose.connection.on('error', console.error);
```

The callback function in `connect()` will run when the connection complete successfully. And the **error** 
event will use `console.error()` function to show the errors when it fail to connect.

As an example, we will create a user model in `app/models` folder to show how to use mongoose to set JSON 
schema in MongoDB.

```js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const userSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
});
module.exports = model('User', userSchema);
```

You can use `Schema` class imported from mongoose to set the schema of a special document and use
`model` function to create a User model class.

