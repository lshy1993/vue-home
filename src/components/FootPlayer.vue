<template>
<div id="footPlayer">
    <div @click="clickBar" class="playButton">stop</div>
    <div @mousedown="onMouseDown" ref="barWrap" class="progressBack">
        <div class="progressFore" :style="'width:'+playProgress*100+'%'" />
        <div class="bufferFore" :style="'width:'+loadProgress*100+'%'" />
    </div>
    <div class="timeText">
        <span>{{ changeTime(audioStatus.playedTime) }}</span>/
        <span>{{ changeTime(audioStatus.duration) }}</span>
    </div>
    <div @mousedown="onVolumeMouseDown" ref="volumeWrap" class="volumeBar">
        <div class="volumeFore" :style="'width:'+audioStatus.volume*100+'%'" />
    </div>
    <div v-if="false">
        <ul>1</ul>
        <ul>2</ul>
    </div>
</div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'FootPlayer',
    props: ['audioStatus'],
    data(){
        return {
            audio: Object
        }
    },
    mounted(){
        this.audio = document.getElementById("myAudio");
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
        },
        onMouseDown (e) {
            const barWidth = this.$refs.barWrap.clientWidth;
            let percentage = (e.clientX-200) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.audio.pause();
            this.audio.currentTime = this.audio.duration * percentage;
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp);
        },
        onMouseMove (e) {
            const barWidth = this.$refs.barWrap.clientWidth;
            let percentage = (e.clientX-200) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.audio.currentTime = this.audio.duration * percentage;
        },
        onMouseUp (e) {
            document.removeEventListener('mouseup', this.onMouseUp);
            document.removeEventListener('mousemove', this.onMouseMove);
            const barWidth = this.$refs.barWrap.clientWidth;
            let percentage = (e.clientX-200) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.audio.currentTime = this.audio.duration * percentage;
            this.audio.play();
        },
        onVolumeMouseDown (e) {
            const barWidth = this.$refs.volumeWrap.clientWidth;
            let percentage = (e.clientX-this.getElementViewLeft(this.$refs.volumeWrap)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.audio.volume = percentage;
            document.addEventListener('mousemove', this.onVolumeMouseMove);
            document.addEventListener('mouseup', this.onVolumeMouseUp);
        },
        onVolumeMouseMove (e) {
            const barWidth = this.$refs.volumeWrap.clientWidth;
            let percentage = (e.clientX-this.getElementViewLeft(this.$refs.volumeWrap)) / barWidth;
            percentage = percentage > 0 ? percentage : 0;
            percentage = percentage < 1 ? percentage : 1;
            this.audio.volume = percentage;
            console.log(percentage);
        },
        onVolumeMouseUp (e) {
            document.removeEventListener('mouseup', this.onVolumeMouseUp);
            document.removeEventListener('mousemove', this.onVolumeMouseMove);
        },
        changeTime: function(ft){
            return this.$moment(ft*1000).format('mm:ss');
        },
        getElementViewLeft (element) {
            let actualLeft = element.offsetLeft;
            let current = element.offsetParent;
            let elementScrollLeft;
            while (current !== null) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
            elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
            return actualLeft - elementScrollLeft;
        }

    }
}
</script>

<style lang="scss">
#footPlayer{
    padding-left: 200px;
    
    .playButton{
        display: inline-block;
        width: 10%;
    }
    .progressBack{
        display: inline-block;
        width: 60%;
        position: relative;
        height: 20px;
        background: white;

        .progressFore{
            z-index: 1003;
            position: absolute;
            background: rgb(65, 184, 131);
            height: 100%;
            //transition: all .5s ease;
        }
        .bufferFore{
            z-index: 1002;
            position: absolute;
            background: #aaa;
            height: 100%;
            transition: all .5s ease;
            will-change: width;
        }
    }

    .timeText{
        display: inline-block;
    }

    .volumeBar{
        display: inline-block;
        width: 5%;
        position: relative;
        height: 10px;
        background: grey;

        .volumeFore{
            //z-index: 1003;
            position: absolute;
            background: rgb(65, 184, 131);
            height: 100%;
            //transition: all .5s ease;
        }

    }

}
</style>
