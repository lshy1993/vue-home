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
        sub: 'AAAAA',
        time: '2014年8月15日',
        innerhtml: '<li>可以<a href="./project/01/download.html">下载</a>了！！！——才怪</li>'
    },
    {
        title: '开放下载',
        sub: 'BBBBBB',
        time: '2014年8月15日',
        innerhtml: '<li>可以<a href="./project/01/download.html">下载</a>了！！！——才怪</li>'
    },
    {
        title: '开放下载',
        sub: 'CCCCCC',
        time: '2014年8月15日',
        innerhtml: '<li>可以<a href="./project/01/download.html">下载</a>了！！！——才怪</li>'
    }
]

var comentList = [
    {
        user: 'aaa',
        text: 'bbbbbbbbbb',
        time: '2018-12-24'
    },
    {
        user: 'aaa',
        text: 'bbbbbbbbbb',
        time: '2018-12-24'
    }
]

var stateCheckList = [
    'MainSite',
    'Server',
    'Blog',
    'API',
    'PcrWiki',
    'GalWiki'
]

var uraSite = false;

export default{
    naviTopBtn,
    sideJump,
    sideList,
    snsList,
    gameIdList,
    newsList,
    stateCheckList,
    uraSite,
    comentList
}