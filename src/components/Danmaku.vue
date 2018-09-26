<template>
<div>
    <div class="inset-container">
        <h1>弹幕留言</h1>
        <ol>
            <li class="section comentbox" v-for="(ele,key) in comentList" :key="key">
                <a class="usericon"><img class="icon48" src=""></a>
                    <div class="inline">
                        <span>{{ ele.user }}</span>
                        <time>{{ ele.time }}</time>
                    </div>
                    <div class="inline">
                        {{ ele.text }}
                        <small>OS</small>
                    </div>
            </li>
        </ol>
    </div>
</div>
</template>

<script>
export default {
    name: 'Danmaku',
    data(){
        return {
            comentList: this.Common.comentList
        }
    }
}
</script>

<style lang="scss">
.usericon {
    margin-left: -20px;
    float: left;
    //position: relative;
    //left: 0;
}
.comentbox {
    margin-bottom: 10px;
    padding: 10px 10px;
    display: inline-block;
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    transition-duration: .5s;
}
.inline{
    display: block;
    margin-bottom: 5px;

    time {
        float: right;
    }
    small {
        float: right;
    }
}

</style>
