<template>
  <nav class="floating-nav" :class="{ 'nav-visible': isVisible }">
    <div class="nav-container">
      <div class="logo-container">
        <router-link :to="{name: 'login'}" class="logo-text">JRN</router-link>
        <div class="logo-pulse"></div>
      </div>
      <div class="nav-links">
        <a 
          v-for="link in navLinks" 
          :key="link.id"
          :href="`#${link.id}`" 
          @click.prevent="$emit('navigate', link.id)" 
          class="nav-link"
        >
          <span class="nav-number">{{ link.number }}</span>
          <span class="nav-text">{{ link.text }}</span>
        </a>
      </div>
      <div class="nav-toggle" @click="toggleMobileNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  isVisible: {
    type: Boolean,
    default: true
  }
})

defineEmits(['navigate'])

const navLinks = [
  { id: 'home', number: '01', text: 'Home' },
  { id: 'about', number: '02', text: 'About' },
  { id: 'work', number: '03', text: 'Work' },
  { id: 'contact', number: '04', text: 'Contact' }
]

const toggleMobileNav = () => {
  // Mobile navigation toggle logic
  console.log('Mobile nav toggled')
}
</script>

<style scoped>
.floating-nav {
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(-100px);
  z-index: 1000;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
}

.floating-nav.nav-visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

.nav-container {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 12px 24px;
  gap: 32px;
}

.logo-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.logo-text {
  font-weight: 700;
  font-size: 16px;
  z-index: 2;
  color: #ffffff;
}

.logo-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  animation: pulse 2s infinite;
  opacity: 0.3;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.2); opacity: 0.1; }
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  font-size: 14px;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-number {
  font-size: 12px;
  opacity: 0.5;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.nav-toggle span {
  width: 20px;
  height: 2px;
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .nav-toggle {
    display: flex;
  }
}
</style>
