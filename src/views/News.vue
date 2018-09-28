<template>
<div>
    <div class="inset-container">
        <header class="pagehead">
            <h1>最新消息</h1>
            <small></small>
        </header>
        <article :class="['section','whitebox',key==0?'header':'']" v-for="(ele,key) in newsList" :key="key">
            <h3>{{ ele.title }}+{{ key }}</h3>
            <aside>
                <time>{{ ele.time }}</time>
            </aside>
            <h4>{{ ele.sub }}</h4>
            <ul v-html="ele.innerhtml"></ul>
            <div v-if="key>3" class="pageTopLink">
                <a href="" title="PAGETOP">PAGETOP</a>
            </div>
        </article>
    </div>
</div>
</template>

<script>
export default {
    name: 'News',
    data(){
        return {
            newsList: this.Common.newsList
        }
    }

}
</script>

 <style lang="scss">

 </style>
 