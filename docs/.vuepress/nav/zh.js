module.exports =
    [
        { text: 'Home', link: '/' },
        {
            text: 'Code', link: '/Code/',
            children: [
                { text: 'ARX', link: '/Code/ARX/' },
                { text: 'JAVA', link: '/Code/JAVA/' },
                {
                    text:'C++', link:'/Code/CPP/'
                },
                {
                    text: 'Programminglanguage', children: [
                        {
                            text: 'Python', link: '/Code/Programminglanguage/Python/'
                        }]
                },
                {
                    text: 'UI', children: [
                        {
                            text: 'Vue3-UI库学习', link: '/Code/UI/VUE/'
                        }]
                },
               
            ]
        },
        {
            text:'Tool',
            children:[
                {
                    text: 'Git',
                    link:'/Tool/Git/',
                },
                {
                    text: 'Gitlab',
                    link:'/Tool/Gitlab/',
                },
                {
                    text: 'PC',
                    link:'/Tool/PC/',
                },
                {
                    text:'docsify',
                    link:'/Tool/docsify/',
                }
            ]
        },
        // 控制元素何时被激活
        {
            text: 'Guide',
            children: [
                {
                    text: 'Guide',
                    link: '/guide/desc',
                    // 该元素将一直处于激活状态
                    // activeMatch: '/',
                },
                {
                    text: 'getting-started',
                    link: '/guide/getting-started',
                    // 该元素在当前路由路径是 /foo/ 开头时激活
                    // 支持正则表达式
                    // activeMatch: '^/foo/',
                },
            ],
        },
        {
            text:'GitHub',
            link:'https://github.com/mazaiguo/vuepress2',
            target:'_blank',
        }
    ]
