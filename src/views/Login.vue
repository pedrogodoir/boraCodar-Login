<template>
    <div class="signup">
        <div>
            <h1>
                Login
            </h1>
            <form class="form" action="" @submit.prevent="login">
                <InputText type="text" placeholder="Nome" v-model="name"/>
                <InputText type="text" placeholder="Senha" v-model="password"/>
                <Button type="submit" label="Entrar" icon="pi pi-check" severity="help"/>
                <p>Nao tem ou esqueceu sua conta?
                    <router-link v-on:click="setAlter" to="/boraCodar-Login/signup">Clique aqui</router-link>
                </p>
                <InlineMessage :severity="alert">{{ textAlert.text }}</InlineMessage>
            </form>
        </div>
    </div>
    <div class="footer">
        <h3>Não use nome ou senha importantes!</h3>
        <p>Nome e senha estão sendo registrados em localStorage</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import router from '../routes';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InlineMessage from 'primevue/inlinemessage';

const name = ref('')
const password = ref('')
const alert = ref('')
const textAlert = reactive({ text: '' })

function login() {
    if(name.value == "" || password.value == "") {
        console.log('404: Not Found')
        alert.value = 'error'
        textAlert.text = '404: Not Found'
    }else if(name.value == localStorage.name && password.value == localStorage.password) {
        localStorage.setItem('enter', 'true')

        alert.value = 'success'
        textAlert.text = 'Logando...'

        setTimeout(() =>{
            router.push('/boraCodar-Login/')
        }, 1000 * 1)
    }else {
        console.log('400: Bad Request')
        alert.value = 'error'
        textAlert.text = '400: Bad Request'
    }
}

function setAlter() {
    localStorage.setItem('alter', 'true')
}

</script>

<style scoped>
    .signup {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form {
        width: 300px;
        padding: 15px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
    }
    .footer {
        position: absolute;
        bottom: 0px;
        left: 10px;
    }
</style>