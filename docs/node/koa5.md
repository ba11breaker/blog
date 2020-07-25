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
`model` function to create a User model class. Then we will rewrite the CRUD api for users model.

```js
const User = require('../models/users');
class UsersController {
    async find(ctx) {
        ctx.body = await User.find();
    }
    async findById(ctx) {
        const user = await User.findById(ctx.params.id);
        if(!user) {
            ctx.throw(404, 'User not found');
        }
        ctx.body = user;
    }
    async create(ctx) {
        ctx.verifyParams({
            name: {
                type: 'string',
                required: true,
            }
        });
        const user = await new User(ctx.request.body).save();
        ctx.body = user;
    }
    async update(ctx) {
        ctx.verifyParams({
            name: {
                type: 'string',
                required: true,
            }
        });
        const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body);
        if(!user) {
            ctx.throw(404, 'User not found');
        }
        ctx.body = user;
    }
    async delete(ctx) {
        const user = await User.findByIdAndRemove(ctx.params.id);
        if(!user) {
            ctx.throw(404, 'User not found');
        }
        ctx.status = 204;
    }
}
module.exports = new UsersController();
```
Using `User` class produced by `model()` method make controller much more simple and
reduce code amount. We can use static functions like `User.find()`, `User.findById()`,
constructor, `User.findByIdAndUpdate()` and so on to complete basic CRUD tasks.