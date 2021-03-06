module.exports = {
    base: '/blog/',
    title: 'Alex Zhao’s Space',
    description: 'Focus on Web Development, From Front End to Computer System',
    themeConfig:{
        nav: [
            { text: "Home", link: "/" },
            { text: "Back End", 
                items: [
                    {text: "node", link: "/node/"},
                    {text: "dotnet", link: "/dotnet/"}
                ]
            },
            { text: "Computer Science", 
                items: [
                    {text: "OS", link: "/operating system/"},
                ]
            },
            { text: "Front End", 
                items: [
                    { text: "Angular", link: "/angular/" },
                    { text: "React", link: "/react/" }
                ]
            },
            { text: "Github", link: "https://github.com/ba11breaker" },
        ],
        sidebar: {
            "/node/":[
                ["", "Start Node.js"],
                ["koa1", "Koa in Action(1): Start Application"],
                ["koa2", "Koa in Action(2): More Koa"],
                ["koa3", "Koa in Action(3): Koa Controller"],
                ["koa4", "Koa in Action(4): Error in Koa"],
                ["koa5", "Koa in Action(5): MongoDB and Koa"],
                ["koa6", "Koa in Action(6): JWT"],
            ],
            "/dotnet/":[
                ["", "Start ASP.Net Core"],
                ["mysql-in-asp.net.core", "How to connect MySql in ASP.Net Core 3"]
            ],
            "/operating system": [
                ["", "Operating System"]
            ],
            "/angular/":[
                ["", "Start Angular"]
            ],
            "/react/": [
                ["", "Start React"]
            ]
        }
    }
}