<template>
<div>
    <div class="inset-container">
        <about-header/>
        <about-social/>
        <about-game/>
        <div class="section shadow grid-container">
            <a class="hosting" href="//futa.moe">
                <i aria-hidden="true" class="far fa-heart"></i> Hosted by Conoha
                <span class="link">//liantui.xyz</span>
            </a>
            <div class="copyright">
                Copyright © 2012-2018 MIAO, Lucky. Illustrations have their own licenses.
            </div>
        </div>
    </div>
</div>
</template>

<script>
import AboutHeader from './about/AboutHeader.vue'
import AboutSocial from './about/AboutSocial.vue'
import AboutGame from './about/AboutGame.vue'

import '../style/about.scss';

export default {
    name: 'About',
    data(){
        return {

        }
    },
    components: {
        AboutHeader,
        AboutSocial,
        AboutGame
    }
}
</script>

<style lang="scss">
    
</style>

