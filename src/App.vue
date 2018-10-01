<template>
<div id="app">
    <header :class="['naviTop',uraSite?'urabg':'normalbg']">
        <router-link :to="'/'" class="naviTitle">(╯‵□′)╯︵┻━┻</router-link>
        <div class="topContent">
            <div class="topFunction">
                <div class="topFuncBtn clearfix">
                    <label for="sideswitch">{{ sideHide?"显":"隐" }}</label>
                    <input style="display:none" type="checkbox" v-model="sideHide" id="sideswitch">
                </div>
                <div class="topFuncBtn clearfix">
                    <div class="clearfix">
                        <label for="modeswitch">开发</label>
                        <input style="display:none" type="checkbox" v-model="uraSite" id="modeswitch">
                    </div>
                </div>
                <div class="devBtnWarp clearfix" v-if="uraSite">
                    <div class="devBtn">
                        <div class="topFuncBtn">
                            <div class="hidehover">背景图</div>
                            <div class="thumbframe">
                                <div :style="{'line-height':'20px'}">
                                    <small>下一张 倒计时：{{ countDown }}</small>
                                </div>
                                <img class="thumb" :style="{'backgroundImage':nextPath}" />
                            </div>
                        </div>
                        <div class="topFuncBtn">今日访问量</div>
                        <div class="topFuncBtn">今日访问量</div>
                        <div class="topFuncBtn">今日访问量</div>
                    </div>
                </div>
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
    <aside :class="['naviSide',uraSite?'urabg':'normalbg',sideHide?'wide':'']">
        <div :class="['naviWrap',sideHide?'wide':'']">
            <div class="naviContent">
                <div class="userHead">
                    <div class="avatar">
                        <span>
                            <img class="avatar-large" :src="[uraSite?'static/images/head-r.jpg':'static/images/head.jpg']" />
                        </span>
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
    <div :class="['mainContent', sideHide?'wide':'']">
        <div id="mainBG" ref="mainbg"/>
        <router-view ></router-view>
    </div>
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
            sideHide: this.Common.sideHide,
            //uraSite: this.Common.uraSite,
            uraSite: true,
            nextPath: '',
            countDown: 30,
            timer: Object
        }
    },
    mounted(){
        var self = this;
        clearInterval(this.timer);
        self.$refs.mainbg.style.backgroundImage = this.Func.ranBG();
        self.nextPath = this.Func.ranBG();
        this.timer = setInterval(()=>{
            if(self.countDown == 0){
                self.$refs.mainbg.style.backgroundImage = self.nextPath;
                //重置时间与下一张图
                self.countDown = 30;
                self.nextPath = this.Func.ranBG();
            }else{
                self.countDown--;
            }
            
        }, 1000);
    },
    beforeRouteEnter (to, from, next) {
        next();
    },
    methods:{

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
        //background-image: url(/static/images/still_unit_107731.png);
        background-size: cover;
        background-position: right bottom;
        background-repeat: no-repeat;
        position: fixed;
        z-index: -1;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 0;
        transition: all 2s ease-in-out;
    }

        .thumb {
            width: 320px;
            height: 180px;
            background-size: 320px 180px;
        }

    .hidehover + .thumbframe {
        position: fixed;
        text-align: center;
        background: #2e3243;
        transition: all .3s;
        opacity: 0;
    }
    .hidehover:hover + .thumbframe {
        opacity: 1;
    }


    .mainContent {
        height: 100%;
        margin-left: 200px;
        transition: all .3s;
        &.wide {
            margin-left: 0;
        }
    }
}
</style>
