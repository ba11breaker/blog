module.exports = {
    base: '/blog/',
    title: 'Hongyu Zhao’s Space',
    description: 'Focus on Web Development, From Front End to Computer System',
    themeConfig:{
        nav: [
            { text: "Home", link: "/" },
            { text: "Node", link: "/node/" },
            { text: "Computer Science", 
                items: [
                    {text: "Golang", link: "/golang/"}
                ]
            },
            { text: "Front End", 
                items: [
                    { text: "React", link: "/react/" },
                    { text: "Angular", link: "/angular/" }
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
            "/angular/":[
                ["", "Start Angular"]
            ],
            "/react/": [
                ["", "Start React"]
            ]
        }
    }
}