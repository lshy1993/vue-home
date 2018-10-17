<template>
<div id="app">
    <header :class="['naviTop',uraSite?'urabg':'normalbg']">
        <router-link :to="'/'" class="naviTitle">(╯‵□′)╯︵┻━┻</router-link>
        <div class="topContent">
            <div class="topFunction">
                <label for="sideswitch" class="topFuncBtn clearfix">
                    <span>{{ sideHide?"显":"隐" }}</span>
                    <input id="sideswitch" style="display:none" type="checkbox" v-model="sideHide">
                </label>
                <label for="modeswitch" class="topFuncBtn clearfix">
                    <span>{{ $t('dev') }}</span>
                    <input id="modeswitch" style="display:none" type="checkbox" v-model="uraSite">
                </label>
                <div class="devBtnWarp clearfix" v-if="uraSite">
                    <div class="devBtn">
                        <div class="topFuncBtn">
                            <div class="hidehover">{{ $t('backimg') }}</div>
                            <div class="thumbframe">
                                <div :style="{'line-height':'20px'}">
                                    <small>{{　$t('next') }}{{ countDown }}</small>
                                </div>
                                <img class="thumb" :style="{'backgroundImage':nextPath}" />
                            </div>
                        </div>
                        <div class="topFuncBtn">
                            <div class="hidehover">言语</div>
                        </div>
                        <div class="topFuncBtn">访问量</div>
                        <div class="topFuncBtn">RSS</div>
                    </div>
                </div>
            </div>
            <div class="naviButtonList clearfixbox">
                <router-link class="naviButton clearfix" v-for="(ele,key) in naviBtn" :key="key" :to="ele.to">
                    <div class="naviImg small_icon">
                        <img :src="ele.url" />
                    </div>
                    <span class="naviTxt">{{ $t(ele.txt) }}</span>
                </router-link>
                <div class="clearfix">
                    <div class="naviButton clickable" @click="showLang">
                        <span class="naviTxt">语言</span>
                    </div>
                    <div class="localechanger" v-if="setting">
                        <span class="localehint">语言/Language/言語</span>
                        <div>
                            <select class="localeselect" v-model="$i18n.locale">
                                <option v-for="(lang, i) in langs" :key="i" :value="lang.locale">{{ lang.txt }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="naviButton clearfix clickable" @click="showLogin">
                    <span class="naviTxt">{{ $t("login") }}</span>
                </div>
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
                        <span>{{ $t(ele.txt) }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </aside>
    <div class="loginDiv" @click="showLogin" v-if="loginOn">
        <login/>
    </div>
    <div :class="['mainContent', sideHide?'wide':'']">
        <div id="mainBG" ref="mainbg"/>
        <router-view style="height:auto" ></router-view>
    </div>
</div>
</template>

<script>
import './style/navi.scss';
import Login from '@components/login.vue';

export default {
    name: 'app',
    data(){
        return {
            naviBtn: this.Common.naviTopBtn,
            sideJump: this.Common.sideJump,
            sideList: this.Common.sideList,
            sideHide: this.Common.sideHide,
            //uraSite: this.Common.uraSite,
            langs: this.Common.langs,
            uraSite: true,
            setting: false,
            loginOn: false,
            nextPath: '',
            countDown: 30,
            timer: Object
        }
    },
    mounted(){
        clearInterval(this.timer);
        this.$refs.mainbg.style.backgroundImage = this.Func.ranBG();
        this.nextPath = this.Func.ranBG();

        var _self = this;
        this.timer = setInterval(()=>{
            if(_self.countDown == 0){
                _self.$refs.mainbg.style.backgroundImage = _self.nextPath;
                //重置时间与下一张图
                _self.countDown = 30;
                _self.nextPath = this.Func.ranBG();
            }else{
                _self.countDown--;
            }
            
        }, 1000);
    },
    beforeRouteEnter (to, from, next) {
        next();
    },
    methods: {
        showLogin: function(){
            this.loginOn = !this.loginOn;
            //document.body.style.overflow = this.loginOn?"hidden":"auto";
            document.body.classList = [this.loginOn?"hideScroll":""];
        },
        showLang: function(){
            this.setting = !this.setting;
        }
    },
    components:{
        Login
    }
}
</script>

<style lang="scss">
#app {
    width: 100%;
    //height: 100%;
    
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

    .thumbframe {
        cursor: default;
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

    .localechanger {
        position: fixed;
        text-align: center;
        background: #2e3243;
        padding: 10px;

        .localehint {
            display: block;
            //line-height: 0;
            font-size: 12px;
            margin-bottom: 5px;
        }
    }

    .loginDiv {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        align-items:center;
        background:rgba(0,0,0,.4);
        z-index: 1020;
    }

    .mainContent {
        //height: 100%;
        margin-left: 200px;        
        padding-top: 50px;
        transition: all .3s;
        z-index: 1000;

        &.wide {
            margin-left: 0;
        }
    }
}
</style>
