
<template>
    <div class="signup">
        <div>
            SignUp
            <form class="form" action="" @submit.prevent="signup">
                <InputText type="text" placeholder="Email" v-model="email"/>
                <Button type="submit" label="Submit" icon="pi pi-check" iconPos="right" severity="help"/>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const email = ref('')

function signup() {
    console.log(email.value)
}

</script>

<style scoped>
    .signup {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form {
        padding: 15px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 15px;
    }
</style>