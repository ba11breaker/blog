module.exports = {
    base: '/blog/',
    title: 'Hongyu Zhao’s Space',
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
                ["module", "Module of Node.js"]
            ],
            "/golang/":[
                ["", "Start Golang"]
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