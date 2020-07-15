---
title: koa3
lang: en-US
---
# Koa in Action 3: Koa Controller
---

The basic routes methods could only deal with simple request and 
processes. For more complex request, we should import **Controller**
into the Koa program. For people who have experience in MVC structure like
**Ruby on Rails**, **Laravel** or **Flask**, they might be very familiar with
**Controller**. In this project, we discard the **View** level in **MVC** and 
focus on utilising **Controller** to receive HTTP request parameters, process business
logic and send HTTP response.

First, let's have a look at the new `index.js` with additonal HTTP methods like PUT and DELETE
for the prefix 'users'.
``` js
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const usersRouter = new Router({ prefix: '/users' });

router.get('/', (ctx) => {
    ctx.body = 'Home Page';
});

usersRouter.get('/', (ctx) => {
    console.log('query:', ctx.query);
    ctx.body = [
        {name: 'leilei'},
        {name: 'kiki'},
    ];
});

usersRouter.post('/', (ctx) => {
    ctx.body = { name: 'lilei'};
});

usersRouter.get('/:id', (ctx) => {
    ctx.body = { name: 'lilei'};
});

usersRouter.put('/:id', (ctx) => {
    ctx.body = { name: 'lilei2'};
});

usersRouter.delete('/:id', (ctx) => {
    ctx.status = 204;
});
app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());
app.listen(3000);
```
If you wanna get the data in the request, you can add a `console.log()`
method in the callback function to show the data.
``` js
usersRouter.put('/:id', (ctx) => {
    console.log(ctx.params);
    ctx.body = { name: 'lilei2'};
});
```
Request the URL **http://localhost:3000/users/123**, the console outputs
json string `{ id: '123' }`.

Particularly, if you wanna read the data packaged in request body, you need to 
add a middleware to parse the body data.

Install **koa-bodyparser** in node_module which is the official middleware provided 
to parse body data.
``` bash
npm i koa-bodyparser --save
```
Then we need to import it into the index.js and use it in the app.
```js
const bodyparser = require('koa-bodyparser');
...
app.use(bodyparser);
```
And now you can get the data in request body.
```js
usersRouter.post('/', (ctx) => {
    console.log(ctx.request.body);
    ctx.body = { name: 'lilei'};
});
```

### Send Http Response
---
We have already known how to write body and states in responses, and if you wanna set the header in response, 
you con use `ctx.set()` method.
``` js
usersRouter.get('/', (ctx) => {
    ctx.set('Allow', 'GET, POST');
});
```
It will add an attribute `Allow: Get, POST` in the header of response.

### Arrange Directory of RESTful
First, we create an `app` directory to conatin all source code files in it, and one file `index.js` should be in 
it. And then create a `routes` directory to contain the files to process URL request with three files which are 
`index.js`, `home.js` and `users.js`.

In the `app/routes/index.js`, we will write a method to import route methods in other two files automatically. 
``` js
const fs = require('fs');
module.exports = (app) => {
    fs.readdirSync(__dirname).forEach(file => {
        if(file === 'index.js') {
            return;
        }
        const route = require(`./${file}`);
        app.use(route.routes()).use(route.allowedMethods());
    });
}
```
And we need to rewrite `app/index.js`.
``` js
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new Koa();
const routing = require('./routes');

app.use(bodyparser());
routing(app);

app.listen(3000, () => {
    console.log('We are lisitening at http://localhost:3000');
});
```
Those route methods are arranged in `home.js` and `users.js`, and you can add
new route method in the similar method without injecting it into the `app.use()`
method manually.

Apart from route methods, we also need to manage controllers. We add a `controller`
directory in `app` directory, and create two files `home.js` and `users.js` in it.

In `app/controllers/homes.js`, we can write like this:
``` js
class HomeController {
    index(ctx) {
        ctx.body= 'This is Home Page';
    }
}
module.exports = new HomeController();
```
And in `app/routes/homes.js`, we can import the HomeController and use `index()` method.
```js
const Router = require('koa-router');
const router = new Router();
const HomeController = require('../controllers/home');

router.get('/', HomeController.index);

module.exports = router;
```
