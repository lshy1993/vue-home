<template>
<div>
    <div class="inset-container">
        <div id="sloganBox">
            <div id="indexPostBig">
                <p id="topSlogan-01"><span>用心做自己的游戏——</span></p>
                <p id="topSlogan-02"><span>掀桌游戏</span></p>
            </div>
            <div id="indexPostSmall">
                <p id="topPost-01"><span>游戏是我们的生活，</span></p>
                <p id="topPost-02"><span>是我们的梦想，</span></p>
                <p id="topPost-03"><span>未来的方向。</span></p>
            </div>
        </div>
        <div id="quickNavi" class="clearfixbox">
            <div class="clearfix naviBlock">
                项目1: pcrwiki
            </div>
            <div class="clearfix naviBlock">
                项目2: erowiki
            </div>
            <div class="clearfix naviBlock">
                项目3: 恋推
            </div>
        </div>
        <div id="indexUpdateInfo">
            <div id="infoControlPrev"><a class="prev browse"></a></div>
            <div id="infoControlNext"><a class="next browse"></a></div>
            <div id="topUpdateInfo">
                <li>可以下载『恋爱与推理（暂定）试玩版』了！！！才怪</li>
            </div>
        </div>
        <div class="floatSu">
            <img src="/static/images/fsu.jpg" />
        </div>
    </div>
</div>
</template>

<script>
import '../style/index.scss';
export default {
    name: 'Index',
    data(){
        return {

        }
    }

}
</script>

<style lang="scss">
    .floatsu{
        position: fixed;
        right: 20px;
        bottom: 20px;
        width: 200px;
    }
</style>
