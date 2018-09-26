<template>
<div>
    <div class="inset-container">
        <header class="pagehead">
            <h1>项目一览</h1>
            <small>没有咕咕咕！</small>
        </header>
        <article class="section whitebox">
            <h2>PcrWiki 公主链接百科
                <span class="tags">
                    <tag ver="Wiki" bgcolor="#f27e40" />
                    <tag ver="Web" bgcolor="#1082c2" />
                </span>
            </h2>
            <ul>
                <li><a href="//pcrwiki.liantui.xyz" target="_blank">PcrWiki</a></li>
                <li>之前入坑公主<span class="heimu">母猪</span>链接后，某一日拆游戏的包，找到了数据库文件。</li>
                <li>一发不可收拾，开始了解析内容，并尝试利用vue.js框架，写了一个简单的wiki</li>
            </ul>
            <h4>TODO</h4>
            <ul>
                <div>美化界面……</div>
                <div>从大佬处获取数据库，转换为sql自动更新</div>
            </ul>
        </article>
        <article class="section whitebox">
            <h2>KanDic 提督方略
                <span class="tags">
                    <tag ver="Wiki" bgcolor="#f27e40" />
                    <tag ver="C#" bgcolor="#97c50f" />
                </span>
            </h2>
            <ul>
                <li>以前入坑舰C的时候，突然奇想制作的Wiki软件。</li>
                <li>由于肉身去了11区，脸太黑一直没有太太，导致这个项目<span class="heimu">坑掉了。</span></li>
            </ul>
            <h4>TODO</h4>
            <ul>
                <div>……</div>
            </ul>
        </article>
    </div>
</div>
</template>

<script>
import Tag from './Tag.vue';
export default {
    name: 'Works',
    data(){
        return {
            
        }
    },
    components:{
        Tag
    }
}
</script>

<style>

</style>
