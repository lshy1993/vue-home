<template>
<div id="miniPlayer">
    <!--audio id="myAudio" :src="music.src" loop="loop" autoplay="autoplay"/!-->
    <div @click="clickBar" class="progressBack">
        <div class="progressFore" :style="'width:'+playProgress*100+'%'"></div>
        <div class="bufferFore" :style="'width:'+loadProgress*100+'%'"></div>
    </div>
    <span class="titleText">{{ musictitle }}</span>
</div>
</template>

<script>
export default {
    name: 'MiniPlayer',
    props: ['musictitle','audioStatus'],
    data(){
        return {
            timer: Object,
            audio: Object,
            //playedTime: 1.1,
            //loadedTime: 0
        }
    },
    mounted(){
        clearInterval(this.timer);
        this.audio = document.getElementById("myAudio");
        // var _self = this;
        // _self.timer = setInterval(()=>{
        //     _self.playedTime = _self.audio.currentTime;
        //     _self.loadedTime = _self.audio.buffered.end(0);
        //     //console.log(_self.audio.buffered.start(0));
        // }, 500);
    },
    computed:{
        playProgress: function(){
            return this.audioStatus.playedTime / this.audioStatus.duration;
        },
        loadProgress: function(){
            return this.audioStatus.loadedTime / this.audioStatus.duration;
        }
    },
    methods:{
        clickBar: function clicks() {
            //console.log(this.audio.play);
            if(this.audio.paused){
                this.audio.play();
            }else{
                this.audio.pause();
            }
        }
    }
}
</script>

<style lang="scss">
#miniPlayer{
    margin-left: 5px;
    width: 190px;

    .progressBack{
        position: relative;
        height: 20px;
        background: white;
    }
    .progressFore{
        z-index: 1003;
        position: absolute;
        background: rgb(65, 184, 131);
        height: 100%;
    }
    .bufferFore{
        z-index: 1002;
        position: absolute;
        background: #aaa;
        height: 100%;
    }
    .titleText{
        font-size: 12px;
        overflow: hidden;
        text-align: left;
    }
}
</style>
