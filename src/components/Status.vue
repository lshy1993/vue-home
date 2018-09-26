<template>
<div>
    <div class="inset-container">
        <div class="section identity-category grid-container">
            <h2 class="title">
                <i aria-hidden="true" class="fas fa-chevron-right"></i>State
            </h2>
            <li class="identity" v-for="(ele,key) in statusList" v-bind:key="key">
                <div class="clickable">
                    <i aria-hidden="true" class="fas fa-registered"></i>
                    <span class="servername">{{ ele }}</span>
                    <i class="servericon">icon</i>
                    <span class="log">{{ getState(key) }}</span>
                </div>
            </li>
        </div>
    </div>
</div>
</template>

<script>
import '../style/about.scss';
export default {
    name: 'Status',
    data(){
        return {
            statusList: this.Common.stateCheckList
        }
    },
    methods: {
        getState: function(key){
            return key;
        }
    }
}
</script>

<style lang="scss">
    .identity {
        .servername {
            display: inline-block;
            width: 30%;
        }
        .servericon {
            display: inline-block;
            width: 5%;
        }
        .log {
            display: inline-block;
            text-align: right;
            width: 60%;
        }
    }

</style>
