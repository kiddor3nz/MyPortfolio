<template>
  <nav class="floating-nav" :class="{ 'nav-visible': isVisible }">
    <div class="nav-container">
      <div class="logo-container">
        <div class="logo-text">JRN</div>
        <div class="logo-pulse"></div>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="nav-links desktop-nav">
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
      
      <!-- Mobile Menu Toggle -->
      <button 
        class="nav-toggle" 
        @click="toggleMobileNav" 
        :class="{ 'active': isMobileMenuOpen }"
        aria-label="Toggle mobile menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <Transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="mobile-nav">
        <div class="mobile-nav-content">
          <a 
            v-for="link in navLinks" 
            :key="`mobile-${link.id}`"
            :href="`#${link.id}`" 
            @click="handleMobileNavClick(link.id)" 
            class="mobile-nav-link"
          >
            <span class="mobile-nav-number">{{ link.number }}</span>
            <span class="mobile-nav-text">{{ link.text }}</span>
          </a>
        </div>
      </div>
    </Transition>
    
    <!-- Mobile Menu Backdrop -->
    <Transition name="backdrop">
      <div 
        v-if="isMobileMenuOpen"
        class="mobile-backdrop" 
        @click="closeMobileNav"
      ></div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['navigate'])

const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'home', number: '01', text: 'Home' },
  { id: 'about', number: '02', text: 'About' },
  { id: 'work', number: '03', text: 'Work' },
  { id: 'contact', number: '04', text: 'Contact' }
]

const toggleMobileNav = () => {
  console.log('Toggle clicked, current state:', isMobileMenuOpen.value)
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileNav = () => {
  console.log('Closing mobile nav')
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleMobileNavClick = (sectionId) => {
  console.log('Mobile nav clicked:', sectionId)
  emit('navigate', sectionId)
  closeMobileNav()
}

// Handle escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileNav()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
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

.desktop-nav {
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
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  gap: 4px;
}

.hamburger-line {
  display: block;
  width: 20px;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center;
}

.nav-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.nav-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 999;
}

.mobile-nav-content {
  padding: 120px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  color: #ffffff;
  padding-left: 16px;
}

.mobile-nav-number {
  font-size: 14px;
  opacity: 0.5;
  min-width: 32px;
}

.mobile-nav-text {
  font-weight: 500;
}

/* Mobile Backdrop */
.mobile-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 998;
}

/* Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.mobile-menu-enter-from {
  transform: translateX(100%);
}

.mobile-menu-leave-to {
  transform: translateX(100%);
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .nav-toggle {
    display: flex;
  }
  
  .nav-container {
    padding: 12px 20px;
    gap: 16px;
  }
  
  .floating-nav {
    top: 20px;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    max-width: 100%;
  }
  
  .mobile-nav-content {
    padding: 100px 24px 24px;
  }
  
  .nav-container {
    padding: 10px 16px;
  }
}
</style>
