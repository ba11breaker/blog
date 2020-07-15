---
title: koa1
lang: en-US
---
# Koa in Action 2: More Koa

### Route in Koa
---
Rewrite the codes in **index.js** in the previous article.
``` js
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if(ctx.url === '/') {
        ctx.body = 'Home Page';
    } else if(ctx.url === '/users') {
        ctx.body = 'User List';
    } else {
        ctx.status = 404;
    }
});

app.listen(3000);
```
Use Postman to request http://localhost:3000, it will return 'Home Page'. If request http://localhost:3000/users,
it will return 'User List'. If request http://localhost:3000/art, it will return 'Not found'.

Then we add the if-else statements to identify the http method.
``` js
app.use(async (ctx) => {
    if(ctx.url === '/') {
        ctx.body = 'Home Page';
    } else if(ctx.url === '/users') {
        if(ctx.method === 'GET') {
            ctx.body = 'User List';
        }else if(ctx.method === 'POST') {
            ctx.body = 'Create User';
        }else {
            ctx.status = 405;
        }
    } else {
        ctx.status = 404;
    }
});
```
It is clear that if we request http://localhost:3000/users by GET method, it returns 'User List'. And if we 
request by POST method, it returns 'Create User'. Others will return 'Method Not Allowed' for 405 status.

Next, we add some add some statements to identify the '/users' request with parameter.
``` js
app.use(async (ctx) => {
    if(ctx.url === '/') {
        ctx.body = 'Home Page';
    } else if(ctx.url === '/users') {
        if(ctx.method === 'GET') {
            ctx.body = 'User List';
        }else if(ctx.method === 'POST') {
            ctx.body = 'Create User';
        }else {
            ctx.status = 405;
        }
    } else if(ctx.url.match(/\/users\/\w+/)) {
        const userID = ctx.url.match(/\/users\/(\w+)/)[1];
        ctx.body = `This is User ${userID}`;
    } else {
        ctx.status = 404;
    }
});
```
`ctx.url.match(/\/users\/\w+/)` is a method to match request like 'users/:parameter',
by regular expression. In this way, if we request http://localhost:3000/users/alex by
GET method, we can get 'This is User alex' as response.

### Koa-router
---
The previous code are too complex and ugly, in this part we will use koa-Router to reconstruct
the codes in **index.js** to indentify route in Koa.

First, install koa-router in node_modules.
``` bash
npm i --save koa-router
```

Import **koa-router** module into the **index.js** and rewrite the middleware.
``` js
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = 'Home Page';
});

router.get('/users', (ctx) => {
    ctx.body = 'User List';
});

router.post('/users', (ctx) => {
    ctx.body = 'Create User';
});

router.get('/users/:id', (ctx) => {
    ctx.body = `This is User ${ctx.params.id}`;
});

app.use(router.routes());
app.listen(3000);
```
This obviously simplify the method to identify request in different URL and different http methods.

We can also use **prefix** in **koa-router** to simplify it again.
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
    ctx.body = 'User List';
});

usersRouter.post('/', (ctx) => {
    ctx.body = 'Create User';
});

usersRouter.get('/:id', (ctx) => {
    ctx.body = `This is User ${ctx.params.id}`;
});

app.use(router.routes());
app.use(usersRouter.routes());
app.listen(3000);
```

### Options request in Koa
OPTIONS http request could be used to show the allowed http request methods
in specific URL. Let's see how to set OPTIONS method in Koa where we can use
`AllowMethods` method.
``` js
app.use(usersRouter.allowedMethods());
```
Request **http://localhost:3000/users** in OPTIONS method, you will find **HEAD**, **GET** 
and **POST** are allowed in the head of response. And if you request this url in other methods
that are not allowed, it will return **'405'** or **'501'**.
