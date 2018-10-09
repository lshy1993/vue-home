<template>
<div class="LoginBox" @click.stop>
    <form ref="loginForm" autocomplete="on" :model="loginForm" :rules="loginRules">
        <input type="text" v-model="loginForm.email" placeholder="Username" autocomplete="on">
        <input type="password" v-model="loginForm.password" placeholder="Password" autocomplete="on">
        <button type="button" @click="handleLogin('loginForm')">
            <span>登录</span>
        </button>
        <div class="tips">admin账号为:admin@wz.com 密码123456</div>
        <div class="tips">editor账号:editor@wz.com 密码123456</div>
    </form>
</div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            loginForm:{
                email: '',
                password: ''
            }
        }
    },
    methods:{
        handleLogin: function(loginForm){

        }
    }
}
</script>

<style lang="scss">
.loginBox {
    width: 400px;
    height: 200px;
    padding: 20px;
    background: white;
    text-align: center;

    input {
        display: block;
        width: 100%;
        height: 30px;
        text-align: left;
        margin-top: 10px;
    }

    button {
        margin-top: 10px; 
        width: 100%;
    }
}
</style>
