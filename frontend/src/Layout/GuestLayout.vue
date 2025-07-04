<template>
  <Navbar @height-change="updateNavbarHeight" />

  <!-- Apply margin-top dynamically -->
  <div :style="{ marginTop: navbarHeight + 'px' }">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/NavbarGuest.vue'

const navbarHeight = ref(0)

const updateNavbarHeight = (height) => {
  navbarHeight.value = height
}
</script>
