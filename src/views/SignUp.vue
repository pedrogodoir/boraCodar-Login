
<template>
    <div class="signup">
        <div>
            <h1>
                SignUp
            </h1>
            <form class="form" action="" @submit.prevent="signup">
                <InputText type="text" placeholder="Nome" v-model="name"/>
                <InputText type="text" placeholder="Senha" v-model="password"/>
                <Button type="submit" label="Registrar" severity="help" class="button"/>
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

function signup() {
    if(name.value == "" || password.value == "") {
        console.log('404: Not Found')
        alert.value = 'error'
        textAlert.text = '404: Not Found'

    }else if(localStorage.name == null && localStorage.password == null ){
        localStorage.setItem('name', name.value)
        localStorage.setItem('password', password.value)
        localStorage.setItem('alter', false)

        alert.value = 'success'
        textAlert.text = 'Conta registrada!'

        setTimeout(() =>{
            router.push('/login')
        }, 1000 * 1)
    }else if(localStorage.alter == 'true') {
        localStorage.setItem('name', name.value)
        localStorage.setItem('password', password.value)
        localStorage.setItem('alter', false)

        alert.value = 'success'
        textAlert.text = 'Conta registrada!'

        setTimeout(() =>{
            router.push('/login')
        }, 1000 * 1)
    }else {
        alert.value = 'info'
        textAlert.text = 'Você já resgitrou uma conta'
    }


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