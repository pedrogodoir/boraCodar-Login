<template>
    <div>
        Home
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import router from '../routes';

    onMounted(() => {
        if(localStorage.enter != 'true') {
            router.push('/boraCodar-Login/login')
        }
    })
</script>

<style>

</style>