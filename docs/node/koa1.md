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