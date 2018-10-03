var naviTopBtn = [
    {
        to: "/about",
        txt: "关于我"
    },
    {
        to: "/intro",
        txt: "关于掀桌"
    },
    {
        to: "/download",
        txt: "下载站"
    },
    {
        to: "/danmu",
        txt: "弹幕留言"
    }
];

var sideJump = [
    {
        to: "",
        txt: "pcrWiki"
    },
    {
        to: "",
        txt: "eroWiki"
    },
    {
        to: "",
        txt: "Blog"
    },
];

var sideList = [
    {
        to: "/news",
        txt: "最新消息"
    },
    {
        to: "/works",
        txt: "作品一览"
    },
    {
        to: "/dev",
        txt: "开发计划"
    },
    {
        to: "/member",
        txt: "成员招募"
    },
    {
        to: "/goods",
        txt: "资源周边"
    },
    {
        to: "/link",
        txt: "友情链接"
    },
    {
        to: "/status",
        txt: "IO"
    }
];

var snsList = [
    {
        href: "https://github.com/lshy1993",
        class: "fa-github",
        where: "github",
        link: "@lshy1993"
    },
    {
        href: "",
        class: "fa-bili",
        where: "bilibili",
        link: "-"
    },
    {
        href: "https://twitter.com/lshy1993",
        class: "fa-twitter",
        where: "twitter",
        link: "@lshy1993"
    },
    {
        href: "http://weibo.com",
        class: "fa-weibo",
        where: "weibo",
        link: "@幸运的路奇"
    },
    {
        href: "https://telegram.me",
        class: "fa-telegram",
        where: "telegram",
        link: "Null"
    },
    {
        href: "https://keybase.io",
        class: "fa-key",
        where: "keybase",
        link: "Null"
    },
]

var gameIdList = [
    {
        where: "BandG",
        link: "MIAO",
        id: "999999999"
    },
    {
        where: "Pcr",
        link: "MIAO",
        id: "999999999"
    },
    {
        where: "碧蓝航线",
        link: "MIAO",
        id: "999999999"
    },
    {
        where: "FLower Knight",
        link: "MIAO",
        id: "999999999"
    },
    {
        where: "神姬Project",
        link: "MIAO",
        id: "999999999"
    },
    {
        where: "雀魂",
        link: "MIAO",
        id: "999999999"
    },
]

var newsList = [
    {
        title: '开放下载',
        sub: '这不是我的高中生活',
        time: '2014年8月15日',
        innerhtml: '<li>可以<a href="./project/01/download.html">下载</a>了！！！——才怪</li>'
    },
    {
        title: '添加新页面',
        sub: '这不是我的高中生活',
        time: '2014年8月14日',
        innerhtml: '<li>『这不是我的高中生活（暂定）』的<a href="./project/01/tips-ending.html">结局介绍</a>初步完成了。</li>'
    },
    {
        title: '添加新页面',
        sub: '这不是我的高中生活',
        time: '2014年7月8日',
        innerhtml: '<li>『这不是我的高中生活（暂定）』的<a href="./project/01/character.html">角色介绍</a>可以观看了。</li>'
    },
    {
        title: '添加新页面',
        sub: '这不是我的高中生活',
        time: '2014年7月6日',
        innerhtml: '<li>可以看到『这不是我的高中生活（暂定）』的<a href="./project/01/introduction.html">游戏简介</a>了。</li><li>还有分集介绍哦，点<a href="./project/01/story.html">这里</a>！</li>'
    },
    {
        title: '游戏主页完成',
        time: '2014年7月5日',
        sub: '这不是我的高中生活',
        innerhtml: '<li>『这不是我的高中生活（暂定）』的<a href="./project/01.html">介绍首页</a>设计好了。</li>'
    },
    {
        title: '添加新页面',
        time: '2014年7月2日',
        sub: '最新页面',
        innerhtml: '<li>所有制作中的游戏在<a href="./project/">这里</a>可以看到了。</li>'
    },
    {
        title: '添加新页面',
        time: '2014年7月1日',
        sub: '最新页面',
        innerhtml: '<li>姑且公开了网页的<a href="/contract.html">联系方式</a>！</li>'
    },
    {
        title: '添加新页面',
        time: '2014年6月30日',
        sub: '最新页面',
        innerhtml: '<li><a href="/partner.html">友情链接</a>水水地完成了！</li>'
    },
    {
        title: '添加新页面',
        time: '2014年6月29日',
        sub: '最新页面',
        innerhtml: '<li>网站添加了<a href="/news.html">最新消息</a>！</li>'
    },
    {
        title: '添加新页面',
        time: '2014年6月28日',
        sub: '成员页面',
        innerhtml: '<li>编写完成了掀桌小组组员的介绍。</li><li><a href="/member.html">成员介绍</a>页面可以进入了！</li>'
    },
    {
        title: '添加新页面',
        time: '2014年6月27日',
        sub: '关于页面',
        innerhtml: '<li>增加了<a href="/about.html">关于掀桌</a>网站的介绍页面。</li>'
    },
    {
        title: '掀桌主页建立',
        time: '2014年6月22日',
        sub: '设计',
        innerhtml: '<li>掀桌游戏的网站框架架构完成！</li><li><a href="/">掀桌主页</a>设计完成。</li><li>即日起可以浏览啦！</li>'
    }
]

var stateCheckList = [
    'MainSite',
    'Server',
    'Blog',
    'MainAPI',
    'PcrWiki',
    'GalWiki'
]

var uraSite = false;
var sideHide = false;

export default{
    naviTopBtn,
    sideJump,
    sideList,
    snsList,
    gameIdList,
    newsList,
    stateCheckList,
    uraSite,
    sideHide
}