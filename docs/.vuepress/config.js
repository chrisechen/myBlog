const utils = require('./utils')
module.exports = {
    host: 'localhost', // ip
    port: '8099', //端口号
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: './public/images/favicon.ico' }
        ]
    ],
    title: "ChriseChen's blog", // 设置网站标题
    description: 'my blog',
    themeConfig: {
        nav: [
            { text: 'Blog', link: '/blog/' }
        ],
        sidebar: utils.inferSiderbars(),
    }
}