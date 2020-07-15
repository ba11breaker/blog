---
title: koa3
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
But the native error process in Koa is not enough because we hope all response can be formed as json
for RESTful API.
