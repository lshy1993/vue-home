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
                        <div @click="changeBG" class="topFuncBtn">
                            <div class="hidehover">{{ $t('backimg') }}</div>
                            <div class="thumbframe">
                                <!--div :style="{'line-height':'20px'}">
                                    <small>{{　$t('next') }}{{ countDown }}</small>
                                </div-->
                                <img class="thumb" :style="{'backgroundImage':nextPath}" />
                            </div>
                        </div>
                        <div @click="showPlayer" class="topFuncBtn">BGM</div>
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
                            <!--div :style="{ backgroundImage: uraSite?'url(/static/images/head-r.jpg)':'url(/static/images/head.jpg)'}" class="avatar-large" /-->
                            <img class="avatar-large" :src="[uraSite?'static/images/head-r.jpg':'static/images/head.jpg']" />
                        </span>
                    </div>
                    <div class="motto">我永远喜欢くすはらゆい</div>
                </div>
                <div v-if="!uraSite" class="line"></div>
                <mini-player v-if="!uraSite" :musictitle="music.title" :audioStatus="aStatus" />
                <div class="line"></div>
                <div class="userMiddle">
                    <div class="hintText">
                        <span>导航站</span>
                    </div>
                    <div class="naviSquareBox clearfixbox">
                        <div class="naviSquare clearfix">
                            <a title="PcrWiki" href="//pcrwiki.liantui.xyz">PW</a>
                        </div>
                        <div class="naviSquare clearfix">
                            <a title="GalWiki" href="/">GW</a>
                        </div>
                        <div class="naviSquare clearfix">
                            <a title="Blog" href="//blog.liantui.xyz">Blog</a>
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
    <audio id="myAudio" :src="music.src" loop="loop" autoplay="autoplay"/>
    <foot-player v-if="uraSite" :music="music" :audioStatus="aStatus"/>
    <div class="loginDiv" @click="showLogin" v-if="loginOn">
        <login/>
    </div>
    <div :class="['mainContent', sideHide?'wide':'']">
        <div id="mainBG" :class="[sideHide?'wide':'']" ref="mainbg"/>
        <router-view style="height:auto;display:block;" />
        <div class="siteFooter">
            <div class="hosting">
                Hosted by <a href="https://www.conoha.jp/">Conoha</a>.
                <span class="link">
                    <a href="//liantui.xyz/">liantui.xyz</a>
                </span>
                <span class="link">
                    <a href="//liantui.moe/">liantui.moe</a>
                </span>
            </div>
            <div class="copyright">Copyright © 2012-2018 MIAO, Lucky. Illustrations have their own licenses.</div>
        </div>
    </div>
</div>
</template>

<script>
import './style/navi.scss';
//import Aplayer from 'vue-aplayer';
import MiniPlayer from '@components/MiniPlayer.vue';
import FootPlayer from '@components/FootPlayer.vue';
import Login from '@components/login.vue';

export default {
    name: 'app',
    data(){
        return {
            naviBtn: this.Common.naviTopBtn,
            //sideJump: this.Common.sideJump,
            sideList: this.Common.sideList,
            sideHide: this.Common.sideHide,
            //uraSite: this.Common.uraSite,
            langs: this.Common.langs,
            uraSite: true,
            setting: false,
            loginOn: false,
            nextPath: '',
            aStatus: {
                playedTime: 0,
                loadedTime: 0,
                duration: 0,
                volume: 0,
                controlOn: false,
                isMuted: false
            },
            music: {
                title: 'secret base~君がくれたもの~',
                artist: 'Silent Siren',
                src: '//liantui.xyz/static/audio/shuihuq.mp3',
                pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
            }
        }
    },
    mounted(){
        this.audio = document.getElementById("myAudio");
        this.audio.volume = 0.2;
        this.audio.addEventListener('timeupdate', this.onAudioTimeUpdate);
        this.audio.addEventListener('progress', this.onAudioProgress);  
        this.audio.addEventListener('durationchange', this.onAudioDurationChange);        
        this.audio.addEventListener('volumechange', this.onAudioVolumeChange)
        this.nextPath = this.Func.ranBG();
        //clearInterval(this.timer);
        //var _self = this;
        // this.timer = setInterval(()=>{
        //     if(_self.countDown == 0){
        //         _self.$refs.mainbg.style.backgroundImage = _self.nextPath;
        //         //重置时间与下一张图
        //         _self.countDown = 30;
        //         _self.nextPath = this.Func.ranBG();
        //     }else{
        //         _self.countDown--;
        //     }
        // }, 1000);
    },
    beforeRouteEnter (to, from, next) {
        next();
    },
    methods: {
        changeBG(){
            this.$refs.mainbg.style.backgroundImage = this.nextPath;
            this.nextPath = this.Func.ranBG();
        },
        showLogin: function(){
            this.loginOn = !this.loginOn;
            //document.body.style.overflow = this.loginOn?"hidden":"auto";
            document.body.classList = [this.loginOn?"hideScroll":""];
        },
        showLang: function(){
            this.setting = !this.setting;
        },
        showPlayer: function(){
            this.aStatus.controlOn = !this.aStatus.controlOn;
        },
        onAudioTimeUpdate(){
            this.aStatus.playedTime = this.audio.currentTime;
        },
        onAudioDurationChange(){
            if (this.audio.duration !== 1) {
                this.aStatus.duration = this.audio.duration;
            }
        },
        onAudioProgress () {
            var len = this.audio.buffered.length;
            if (len) {
                this.aStatus.loadedTime = this.audio.buffered.end(len - 1);
            } else {
                this.aStatus.loadedTime = 0;
            }
        },
        onAudioVolumeChange () {
            this.aStatus.volume = this.audio.volume;
            this.aStatus.isMuted = this.audio.muted;
        },
    },
    components:{
        Login,
        MiniPlayer,
        FootPlayer,
        //Aplayer
    }
}
</script>

<style lang="scss">
#app {
    width: 100%;
    //height: 100%;
}
</style>
