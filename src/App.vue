<template>
<div id="app">
    <header :class="['naviTop',uraSite?'urabg':'normalbg']">
        <router-link :to="'/'" class="naviTitle">(╯‵□′)╯︵┻━┻</router-link>
        <div class="topContent">
            <div class="topFunction">
                <div class="clearfix">
                    <input type="checkbox" v-model="uraSite" v-on:change="changeMode()" id="modeswitch">
                    <!--label for="modeswitch">开发者模式</label-->
                </div>
                <a class="clearfix">隐藏边界</a>
            </div>
            <div class="naviButtonList clearfixbox">
                <router-link class="naviButton clearfix" v-for="(ele,key) in naviBtn" :key="key" :to="ele.to">
                    <div class="naviImg small_icon">
                        <img :src="ele.url" />
                    </div>
                    <span class="naviTxt">{{ ele.txt }}</span>
                </router-link>
            </div>
        </div>
    </header>
    <aside :class="['naviSide',uraSite?'urabg':'normalbg']">
        <div class="naviWrap">
            <div class="naviContent">
                <div class="userHead">
                    <div class="avatar avatar-large">
                        <img src="static/images/head-r.jpg" />
                    </div>
                    <div class="motto">我永远喜欢くすはらゆい</div>
                </div>
                <div class="line"></div>
                <div class="userMiddle">
                    <div class="hintText">
                        <span>导航站</span>
                    </div>
                    <div class="naviSquareBox clearfixbox">
                        <div class="naviSquare clearfix" v-for="(ele,key) in sideJump" :key="key">
                            <a :title="ele.txt" :href="ele.to">{{ ele.txt }}</a>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="userBottom">
                    <div class="hintText">
                        <span>MIAO小屋</span>
                    </div>
                    <router-link class="naviList" :to="ele.to" v-for="(ele,key) in sideList" :key="key">
                        <span>{{ ele.txt }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </aside>
    <div id="mainBG" />
    <router-view class="mainContent"></router-view>
</div>
</template>

<script>
import  './style/navi.scss';

export default {
    name: 'app',
    data(){
        return {
            naviBtn: this.Common.naviTopBtn,
            sideJump: this.Common.sideJump,
            sideList: this.Common.sideList,
            sideHide: true,
            uraSite: this.Common.uraSite
        }
    },
    beforeRouteEnter (to, from, next) {
        next();
    },
    methods:{
        changeMode: function(){
            
        }
    }
}
</script>

<style lang="scss">
#app {
    position: relative;
    width: 100%;
    height: auto;
    //min-height: 100%;
    padding-top: 50px;
    
    #mainBG {
        background-image: url(/static/images/still_unit_107731.png);
        background-size: cover;
        background-position: right bottom;
        background-repeat: no-repeat;
        position: fixed;
        z-index: -1;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 0;
        transition: all .3s;
    }

    .mainContent {
        //margin-top: 50px;
        margin-left: 200px;
        // margin-right: 15px;
        // margin-bottom: 10px;
    }
}
</style>
