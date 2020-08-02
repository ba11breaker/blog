---
title: koa6
lang: en-US
---
# Koa in Action 6: JWT
---
JWT ,**JSON Web Tokens**, which contains three part: Header, Payload and Signature. 
Payload is the main part of JWT which has the data need to be stored in backend. 
Signature ensure Token would not be distorted or demaged during transmission.

To use JWT in Node.js, we need to install **jsonwebtoken** module.

```bash
npm i jsonwebtoken --save
```

Now we can use **jsonwebtoken** to design our login api. First, we need to create a new route
in `routes/users.js`. It is a post request and we will send user name and password in request body.

```js
router.post('/login', UsersController.login);
```

Then we create a login controller in `controllers\users.js`, it will process the request 
to login and return the token made by JWT module.

```js
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/users');
const { secret } = require('../config');

class UsersController {
    ...
    async login(ctx) {
        ctx.verifyParams({
            name: {
                type: 'string',
                required: true,
            },
            password: {
                type: 'string',
                required: true,
            }
        });
        const user = await User.findOne(ctx.request.body);
        if(!user) {
            ctx.throw(401, 'User or passowrd are not correct.');
        }
        const { _id, name } = user;
        const token = jsonwebtoken.sign({ _id, name }, secret, {expiresIn: '1d'});
        ctx.body = { token };
    }
}
```
The login controller will first verify the parameters in request body and then find it in mongodb.
If there is no such pair of username and password then it will throw a **401** error. If it login 
successfully, it will return a token made by JWT as the codes show.

After that, we can write an auth middleware to check whether the token sent by frontend is complete and
valid.

```js
const auth = async (ctx, next) => {
    const { authorization = '' } = ctx.request.header;
    const token = authorization.replace('Bearer ', '');
    try{
        const user = jsonwebtoken.verify(token, secret);
        ctx.state.user = user;
    } catch(err) {
        ctx.throw(401, err.message);
    }
    await next();
};
```

Use this middleware in those api you need to authenticate.

Or you can use `koa-jwt` package to product this middleware, install `koa-jwt` by npm firstly.

```bash
npm i koa-jwt --save
```

Then produce the auth middleware.

``` js
const jwt = require('koa-jwt');
const { secret } = require('../config');

const auth = jwt({ secret });
```

This auth middleware is similar to the middleware we write ourselves before.