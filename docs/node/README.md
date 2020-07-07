---
title: NodeJS
lang: en-US
---
# Start Node.js
Javascript is a script language, all script languages need a parser to run. For javascript in HTML page, the browser plays the role of a parser. But for independent javascript, NodeJS is such kind of parser.

The functionality of javascript running in NodeJS is to manipulate disk file or build an HTTP server. NodeJS provides corresponding build-in objects such as fs and http.

The author of NodeJS said that the purpose of creating NodeJS is to achieve a high-performance Web server. He first values the superiority of the event mechanism and asynchronous IO model, not JS. But he needs to choose a programming language to realize his ideas. This programming language cannot bring its own IO function, and needs to support the event mechanism well. JS does not have its own IO function. It is used to handle DOM events in the browser and has a large group of programmers to use, so it has become a natural choice.

As he wished, NodeJS became active on the server side, and a large number of Web services based on NodeJS appeared. On the other hand, NodeJS makes the front-end public an artifact, and finally can let its ability coverage jump out of the browser window, and a larger number of front-end tools have sprung up.

### Run NodeJS
Open the terminal, enter 'node' into command line, write a line of javascripte codes and run it immediately. 
``` js
$ node
> console.log('Hello World');
Hello World!
```

### Permissions Issue
In Linux syste, using NodeJS to listen 80 or 443 port need root power, there are two methods.

One way is to use sudo command run NodeJS. It is more recommended.
``` 
$ sudo node server.js
```
Another way is to use "chmod +s" command to run. But it is not safe so we don't consider it in most times.
``` 
$ sudo chown root /usr/local/bin/node
$ sudo chmod +s /usr/local/bin/node
```