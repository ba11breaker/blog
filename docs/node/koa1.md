---
title: koa1
lang: en-US
---
# Koa in Action 1: Start Application
In the following articles, we will develop a back-end web application based on
Koa.js. 

This Application is a quora-like app which users can publish 
questions on the website and answer thoses questions they are interested in.

During the development, we will use Koa as the main framework and mongodb as the 
batabase system. We will also use the JWT to implement authentication and RESTful API 
interface to construct apis.

### RESTful API
REST, stands for **Representational State Transfer**, which is an architectural style and approach to communications often used in web services development. 

There are six Architecture Constraints in RESTful API:
1. Client-Server Based
2. Stateless Operations
3. Cache 
4. Uniform Interface
5. Layered System
6. Code-on-Demand

An RESTful API must contain basic URIs , standard HTTP methods 
, and transmission media types.

Have a look at some examples:
1. GET /users      # get users list
2. GET /users/5    # get the user whose id is 5
3. POST /users     # create a new user
4. PUT /users/5    # update the user whose id is 5
5. DELETE /users/5 # delete the user whose id is 5

There are some normal rules in RESTful API design we must follow:
1. Use nouns to represent URI, plurals is better.
2. URI uses nesting to indicate association.
3. Use correct HTTP methods, don't use them in unsuitable request.
4. For those requests are not CRUD, use POST/action/sub-resource

### Start Koa
Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. 

Three charactersitcs in Koa:
1. Use async function, discard callback fucntion.
2. Strengthen error processing: try catch
3. No bind to any middleware

To create a koa project, we make a new directory and init it.
``` bash
mkdir quora-api
cd quora-api
npm init
```

Then we install the koa.
``` bash
npm i --save koa 
```

Create **index.js** in the root directory, and write the following codes.
``` js
const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
    ctx.body = 'Hello World';
});

app.listen(3000);
```

Then node the **index.js** to create the server to listen.
``` bash
node index.js
```

Open your browser and visit **http://localhost:3000** and you can see the 'Hello World'.

### Onion Model
Try to write a new middleware function in **index.js**.
``` js
app.use((ctx) => {
    console.log(2);
});
app.listen(3000);
```
Then we run it, and we find that the console doesn't write 2. That's because if you have more 
than one middleware in Koa, you need to use **next** function to connect them.
``` js
app.use(async (ctx, next) => {
    await next();
    console.log("Hello Quora");
});
app.use((ctx) => {
    console.log(2);
})
```
Run it again and look at how it runs.
```
2
Hello Quora
```
So the **next** function would call the next middleware which writes 2 in the console. That is 
exactly the functionality of Onion Model.
