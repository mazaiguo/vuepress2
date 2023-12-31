module.exports = {
    '/Code/ARX/': [
        {
            text: 'ARX',
            children: [
                { text: '主页🗒️', link: '/' },
                { text: 'Code📔', link: '/Code/' },
                { text: 'ARX📖', link: '/Code/ARX/' },
                '/Code/ARX/CustomEntity Trim Extend.md',
                '/Code/ARX/ARX保存相关问题.md',
                '/Code/ARX/ARX获取背景色',
                '/Code/ARX/ObjectARXWizard2020安装及bug修改',
                '/Code/ARX/开发版本对照表'
            ],
        },
    ],

    '/Code/JAVA/': [
        {
            text: 'JAVA',
            children: [
                { text: '主页🗒️', link: '/' },
                { text: 'Code📔', link: '/Code/' },
                { text: 'JAVA📘', link: '/Code/JAVA/' },
                '/Code/JAVA/问题.md'],
        },
    ],
    '/Code/Programminglanguage/Python/': [
        {
            text: 'Python',
            children: [
                { text: '主页🗒️', link: '/' },
                { text: 'Code📔', link: '/Code/' },
                { text: 'Python📜', link: '/Code/Programminglanguage/Python/' },
                '/Code/Programminglanguage/Python/question',
                '/Code/Programminglanguage/Python/utils'
            ],
        },
    ],
    '/Code/UI/VUE/': [
        {
            text: 'VUE',
            children: [
                { text: 'Code📔', link: '/Code/' },
                { text: 'VUE📰', link: '/Code/UI/VUE/' },
                {
                    text: 'plugin-md-enhance', link: '/Code/UI/VUE/plugin-md-enhance',
                    // 目录是否折叠
                    collapsible: true,
                    children: [
                        // 这种方式需要处理markdown文件名必须不能为中文，这种方式也没有目录结构，不太推荐
                        { text: 'align', link: '/Code/UI/VUE/md-enhance/align' },
                        { text: 'card', link: '/Code/UI/VUE/md-enhance/card' },
                        { text: 'chart', link: '/Code/UI/VUE/md-enhance/chart' },
                        { text: 'code-demo', link: '/Code/UI/VUE/md-enhance/code-demo' },
                        { text: 'code-tabs', link: '/Code/UI/VUE/md-enhance/code-tabs' },
                        { text: 'container', link: '/Code/UI/VUE/md-enhance/container' },
                        { text: 'demo.snippet', link: '/Code/UI/VUE/md-enhance/demo.snippet' },
                        { text: 'echarts', link: '/Code/UI/VUE/md-enhance/echarts' },
                        { text: 'flowchart', link: '/Code/UI/VUE/md-enhance/flowchart' },
                        { text: 'footnote', link: '/Code/UI/VUE/md-enhance/footnote' },
                        { text: 'include', link: '/Code/UI/VUE/md-enhance/include' },
                        { text: 'mark', link: '/Code/UI/VUE/md-enhance/mark' },
                        { text: 'mermaid', link: '/Code/UI/VUE/md-enhance/mermaid' },
                        { text: 'playground', link: '/Code/UI/VUE/md-enhance/playground' },
                        { text: 'revealjs', link: '/Code/UI/VUE/md-enhance/revealjs' },
                        { text: 'slide-page', link: '/Code/UI/VUE/md-enhance/slide-page' },
                        { text: 'stylized', link: '/Code/UI/VUE/md-enhance/stylized' },
                        { text: 'sup-sub', link: '/Code/UI/VUE/md-enhance/sup-sub' },
                        { text: 'tabs', link: '/Code/UI/VUE/md-enhance/tabs' },
                        { text: 'tasklist', link: '/Code/UI/VUE/md-enhance/tasklist' },
                        { text: 'tex', link: '/Code/UI/VUE/md-enhance/tex' },
                        { text: 'Vue-Playground', link: '/Code/UI/VUE/md-enhance/Vue-Playground' },
                    ]
                },
                {
                    text: 'Vue3StudyNote', link: '/Code/UI/VUE/Vue3StudyNote',
                    // 目录是否折叠
                    collapsible: true,
                    children: [
                        // 推荐这种方式，点击名称有侧边栏目录
                        '/Code/UI/VUE/VUE3学习/Class 与 Style 绑定',
                        '/Code/UI/VUE/VUE3学习/Vue3安装',
                        '/Code/UI/VUE/VUE3学习/事件处理',
                        '/Code/UI/VUE/VUE3学习/列表渲染',
                        '/Code/UI/VUE/VUE3学习/响应式基础',
                        '/Code/UI/VUE/VUE3学习/声明响应式状态',
                        '/Code/UI/VUE/VUE3学习/模板语法',
                        '/Code/UI/VUE/VUE3学习/自定义组件',
                        '/Code/UI/VUE/VUE3学习/表单输入绑定',
                        '/Code/UI/VUE/VUE3学习/路由Vue Router',
                        '/Code/UI/VUE/VUE3学习/问题',
                    ]
                },
                '/Code/UI/VUE/MFC_Use_cef',
                '/Code/UI/VUE/mockjs',
                '/Code/UI/VUE/Vue3-UI_Study',
                '/Code/UI/VUE/VUEComponent_Packaging',
                '/Code/UI/VUE/VUEPRESSInstall',
                '/Code/UI/VUE/VUE3_Admin_For_sgg',
            ],
        },
    ],
    '/Code/CPP/': [
        {
            text: 'CPP',
            children: [
                { text: '主页🗒️', link: '/' },
                { text: 'Code📔', link: '/Code/' },
                {
                    text: 'C++📚', link: '/Code/CPP/',
                    collapsible: true,
                    children: [
                        '/Code/CPP/libcurl post json乱码',
                        '/Code/CPP/VC获取时间',
                        '/Code/CPP/Visual Studio 调试器中的CPP格式说明符',
                        '/Code/CPP/Windows 编译libcurl，添加openssl和zlib支持',
                        '/Code/CPP/字符串转换',
                    ]
                },
            ]
        }
    ],
    '/Tool/Git/': [
        {
            text: 'Git🔨',
            children: [
                { text: '主页🗒️', link: '/' },
                { text: 'Tool🛠️', link: '/Tool/' },
                '/Tool/Git/Git问题',
                '/Tool/Git/ngrok令牌',
                '/Tool/Git/SSH创建及提取',
                '/Tool/Git/令牌',
                '/Tool/Git/切换账号',
                '/Tool/Git/导出log',
                '/Tool/Git/转移',
                '/Tool/Git/问题',
                '/Tool/Git/key',
            ]
        }
    ],
    '/Tool/GitLab/': [
        {
            text: 'GitLab⛏️',
            children: [
                { text: '主页🗒️', link: '/' },
                { text: 'Tool🛠️', link: '/Tool/' },
                '/Tool/GitLab/创建项目'
            ]
        }
    ],
    '/Tool/docsify/': [
        {
            text: 'docsify安装🛡️',
            children: [
                { text: '主页🗒️', link: '/' },
                { text: 'Tool🛠️', link: '/Tool/' },
                '/Tool/docsify/docsify安装'
            ]
        }
    ],
    '/Tool/PC/': [
        {
            text: 'PC⚔️',
            children: [
                { text: '主页🗒️', link: '/' },
                { text: 'Tool🛠️', link: '/Tool/' },
                '/Tool/PC/右键菜单'
            ]
        }
    ],
    '/Tool/magic/': [
        {
            text: 'magic💣',
            children: [
                { text: '主页🗒️', link: '/' },
                { text: 'Tool🛠️', link: '/Tool/' },
                '/Tool/magic/节点搭建',
            ]
        }
    ],
    '/guide/': [
        {
            text: 'Guide',
            children: [
                { text: '主页🗒️', link: '/' },
                '/guide/desc',
                '/guide/getting-started',
            ],
        },
    ],
}