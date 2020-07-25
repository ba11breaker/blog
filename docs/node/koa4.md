---
title: koa4
lang: en-US
---
# Koa in Action 4: Error in Koa
---
In this article, we will see how to process error in the Koa framework.

First, we will have a look at native error process methods in Koa. If request **http://localhost:3000/jdsfds**, 
you will get a response which is 'Not Found' and status is '404', that is an error that there is no such kind of methods to 
process this URL request.

And if you wanna trigger a **412** error, we can add a `throw()` method in `app/controllers/users.js`.
```js
findById(ctx) {
        if(ctx.params.id * 1 >= db.length) {
            ctx.throw(412);
        }
        ctx.body = db[ctx.params.id * 1];
    }
```
And use it in `app/routes/users.js`.
```js
const Router = require('koa-router');
const router = new Router({ prefix: '/users' });
const UsersController = require('../controllers/users');

router.get('/', UsersController.find);
router.post('/', UsersController.create);
// Use 412 Error Process
router.get('/:id', UsersController.findById);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

module.exports = router;
```
`db` is an array contains the list of users, and if you request like
**http://localhost:3000\users\2432534524**, and 2432534524 is obviously larger than
the list, it will retuen 'Precondition Failed' and status is '412'.

Then is **500** error, Internal Server Error, which is very common in daily life.
Usually, if there are is an error happen in the backend system and the request from client trigger
the error, it will return **500** error. And you can see the error stack in the console of Server.

For example, we add a `test()` method which is not defined or imported in **UsersController**.
```js
class UsersController {
    find(ctx) {
        test();
        ctx.body = db;
    }
    ...
}
```
Request **http://localhost:3000/users**, you will get response of 'Internal Server Error' and the 
status is '500'. You will find the error stack in the console.
```bash
ReferenceError: test is not defined
...
```
But the native error process in Koa is not enough because we hope all responses can be formed by json
for RESTful API. In this way, we need to write middleware for error processing.

### Write Middleware for Error
---
It is very simple to write such a middleware, we can write a middleware in front of all middlewares functions in
`app/index.js` and use try catch structure.
```js
app.use(async (ctx, next) => {
    try {
        await next();
    } catch(err) {
        ctx.status = err.status || err.statusCode || 500;
        ctx.body = {
            message: err.message,
            status: ctx.status
        };
    }
});
app.use(bodyparser());
routing(app);

app.listen(3000, () => {
    console.log('We are lisitening at http://localhost:3000');
});
```
Now that if you request **http://localhost:3000\users\2432534524**, it will return
a json with **412** status: 
```json
{
    "message": "Precondition Failed",
    "status": 412
}
```

### Koa-json-error
---
We have implemented middleware for error processing ourselves and then I recommend a module called 
`koa-json-error` to help us in real world development.

First, install `koa-json-error` using npm.
```bash
npm i koa-json-error --save
```
And then, we import it into `app\index.js` and use it in the method `app.use()`.
```js
const error = require('koa-json-error');

app.use(error());
```
To test it, we request **http://localhost:3000\users\2432534524**, it will return a json with
status and error statck.
```json
{
    "message": "Precondition Failed",
    "name": "PreconditionFailedError",
    "stack": "PreconditionFailedError: Precondition Failed\n    at Object.throw (D:\\repository\\koa-repo\\quora-api\\node_modules\\koa\\lib\\context.js:97:11)\n    at findById (D:\\repository\\koa-repo\\quora-api\\app\\controllers\\users.js:12:22)\n    at dispatch (D:\\repository\\koa-repo\\quora-api\\node_modules\\koa-compose\\index.js:42:32)\n    at D:\\repository\\koa-repo\\quora-api\\node_modules\\koa-router\\lib\\router.js:368:16\n    at dispatch (D:\\repository\\koa-repo\\quora-api\\node_modules\\koa-compose\\index.js:42:32)\n    at D:\\repository\\koa-repo\\quora-api\\node_modules\\koa-compose\\index.js:34:12\n    at dispatch (D:\\repository\\koa-repo\\quora-api\\node_modules\\koa-router\\lib\\router.js:373:31)\n    at dispatch (D:\\repository\\koa-repo\\quora-api\\node_modules\\koa-compose\\index.js:42:32)\n    at allowedMethods (D:\\repository\\koa-repo\\quora-api\\node_modules\\koa-router\\lib\\router.js:429:12)\n    at dispatch (D:\\repository\\koa-repo\\quora-api\\node_modules\\koa-compose\\index.js:42:32)",
    "status": 412
}
```
But it is not safe to show so many error information in prodcution environment, so we neet to de some configuration in `app/index.js`.
```js
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const error = require('koa-json-error');
const app = new Koa();
const routing = require('./routes');

app.use(error({
    postFormat: (err, { stack, ...rest }) => {
        return process.env.NODE_ENV === 'production'
        ? rest : { stack, ...rest }
    }
}));
app.use(bodyparser());
routing(app);

app.listen(3000, () => {
    console.log('We are lisitening at http://localhost:3000');
});
```
In windows platform, if you want to run the application in production environment more 
conveniently, you can install a module called `cross-env`. Remember save it in dev dependencies.
```bash
npm i cross-env --save-dev
```
You can use the command `cross-env NODE_ENV=production node app` to run the application in prodcution
environment. In other OS, you can directly run command `NODE_ENV=prodcution node app` to run it.

### Koa-parameter
---
We can install `koa-parameter` to check the parameter in http request body.
```bash
npm i koa-parameter --save
```
After installation, we need to register it in `app/index.js`.
```js
const parameter = require('koa-parameter');
app.use(parameter(app));
```

If we wanna check whether the body in a http request is what we want, we can
use this middleware in controller functions. For example, we hope the request to
create a user contains **name** and **age** attributes and **name** is compulsory,
we can use `ctx.verifyParams()`.
```js
create(ctx) {
    ctx.verifyParams({
        name: {
            type: 'string',
            required: true,
        },
        age: {
            ype: 'number',
            required: false,
        }
    });
    db.push(ctx.request.body);
    ctx.body = ctx.request.body;
}
```

If request doesn't satisfy the requirements and the system will return **422** status code
and error messages.

```json
{
    "message": "Validation Failed",
    "errors": [
        {
            "message": "should be a string",
            "code": "invalid",
            "field": "name"
        }
    ],
    "params": {
        "name": 123
    }
}
```