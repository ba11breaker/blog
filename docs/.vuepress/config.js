module.exports = {
    title: 'Hongyu Zhao’s Space',
    description: 'Focus on Node.js and Golang, From Front End to Computer System',
    themeConfig:{
        nav: [
            { text: "Home", link: "/" },
            { text: "Node", link: "/node/" },
            { text: "Golang", link: "/golang/" },
            { text: "Front End", 
                items: [
                    { text: "React", link: "/react/" },
                    { text: "Angular", link: "/angular/" }
                ]
            },
            { text: "Github", link: "https://github.com/ba11breaker" },
        ],
        sidebar: 'auto',
    }
}