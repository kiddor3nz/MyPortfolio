<template>
    Welcome! 
</template>

<script setup>
import useUserStore from '@/store/user';
import { computed } from 'vue';

const userStore = useUserStore()
const user = computed(() => userStore.user)
</script>