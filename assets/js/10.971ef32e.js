(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{356:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"koa-in-action-1-start-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa-in-action-1-start-application"}},[t._v("#")]),t._v(" Koa in Action 1: Start Application")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("In the following articles, we will develop a back-end web application based on\nKoa.js.")]),t._v(" "),a("p",[t._v("This Application is a quora-like app which users can publish\nquestions on the website and answer thoses questions they are interested in.")]),t._v(" "),a("p",[t._v("During the development, we will use Koa as the main framework and mongodb as the\nbatabase system. We will also use the JWT to implement authentication and RESTful API\ninterface to construct apis.")]),t._v(" "),a("h3",{attrs:{id:"restful-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-api"}},[t._v("#")]),t._v(" RESTful API")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("REST, stands for "),a("strong",[t._v("Representational State Transfer")]),t._v(", which is an architectural style and approach to communications often used in web services development.")]),t._v(" "),a("p",[t._v("There are six Architecture Constraints in RESTful API:")]),t._v(" "),a("ol",[a("li",[t._v("Client-Server Based")]),t._v(" "),a("li",[t._v("Stateless Operations")]),t._v(" "),a("li",[t._v("Cache")]),t._v(" "),a("li",[t._v("Uniform Interface")]),t._v(" "),a("li",[t._v("Layered System")]),t._v(" "),a("li",[t._v("Code-on-Demand")])]),t._v(" "),a("p",[t._v("An RESTful API must contain basic URIs , standard HTTP methods\n, and transmission media types.")]),t._v(" "),a("p",[t._v("Have a look at some examples:")]),t._v(" "),a("ol",[a("li",[t._v("GET /users      # get users list")]),t._v(" "),a("li",[t._v("GET /users/5    # get the user whose id is 5")]),t._v(" "),a("li",[t._v("POST /users     # create a new user")]),t._v(" "),a("li",[t._v("PUT /users/5    # update the user whose id is 5")]),t._v(" "),a("li",[t._v("DELETE /users/5 # delete the user whose id is 5")])]),t._v(" "),a("p",[t._v("There are some normal rules in RESTful API design we must follow:")]),t._v(" "),a("ol",[a("li",[t._v("Use nouns to represent URI, plurals is better.")]),t._v(" "),a("li",[t._v("URI uses nesting to indicate association.")]),t._v(" "),a("li",[t._v("Use correct HTTP methods, don't use them in unsuitable request.")]),t._v(" "),a("li",[t._v("For those requests are not CRUD, use POST/action/sub-resource")])]),t._v(" "),a("h3",{attrs:{id:"start-koa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-koa"}},[t._v("#")]),t._v(" Start Koa")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs.")]),t._v(" "),a("p",[t._v("Three charactersitcs in Koa:")]),t._v(" "),a("ol",[a("li",[t._v("Use async function, discard callback fucntion.")]),t._v(" "),a("li",[t._v("Strengthen error processing: try catch")]),t._v(" "),a("li",[t._v("No bind to any middleware")])]),t._v(" "),a("p",[t._v("To create a koa project, we make a new directory and init it.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" quora-api\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" quora-api\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init\n")])])]),a("p",[t._v("Then we install the koa.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save koa \n")])])]),a("p",[t._v("Create "),a("strong",[t._v("index.js")]),t._v(" in the root directory, and write the following codes.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Koa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Koa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Then node the "),a("strong",[t._v("index.js")]),t._v(" to create the server to listen.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("node index.js\n")])])]),a("p",[t._v("Open your browser and visit "),a("strong",[t._v("http://localhost:3000")]),t._v(" and you can see the 'Hello World'.")]),t._v(" "),a("h3",{attrs:{id:"onion-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onion-model"}},[t._v("#")]),t._v(" Onion Model")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Try to write a new middleware function in "),a("strong",[t._v("index.js")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Then we run it, and we find that the console doesn't write 2. That's because if you have more\nthan one middleware in Koa, you need to use "),a("strong",[t._v("next")]),t._v(" function to connect them.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Quora"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Run it again and look at how it runs.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("2\nHello Quora\n")])])]),a("p",[t._v("So the "),a("strong",[t._v("next")]),t._v(" function would call the next middleware which writes 2 in the console. That is\nexactly the functionality of Onion Model.")])])}),[],!1,null,null,null);s.default=e.exports}}]);