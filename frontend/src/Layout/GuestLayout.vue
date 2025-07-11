<template>
  <div class="portfolio-container">
    <!-- Scroll Progress -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    
    <!-- Navigation -->
    <NavigationBar 
      :is-visible="showNav" 
      @navigate="scrollToSection"
    />

    <!-- Hero Section -->
    <HeroSection 
      :is-animated="heroAnimated"
      @explore-work="scrollToSection('work')"
      @get-in-touch="scrollToSection('contact')"
      ref="heroSectionRef"
    />

    <!-- About Section -->
    <AboutSection 
      :is-animated="aboutAnimated"
      ref="aboutSectionRef"
    />

    <!-- Work Section -->
    <WorkSection 
      :is-animated="workAnimated"
      @view-project="handleViewProject"
      ref="workSectionRef"
    />

    <!-- Contact Section -->
    <ContactSection 
      :is-animated="contactAnimated"
      @form-submit="handleFormSubmit"
      ref="contactSectionRef"
    />

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-text">
          <p>© 2024 John Doe. Crafted with passion and precision.</p>
        </div>
        <div class="footer-time">
          <span>{{ currentTime }}</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavigationBar from '@/components/NavbarGuest.vue'
import HeroSection from '@/views/HomeView.vue'
import AboutSection from '@/views/AboutView.vue'
import WorkSection from '@/views/ProjectView.vue'
import ContactSection from '@/views/ContactView.vue'

// Reactive data
const scrollProgress = ref(0)
const showNav = ref(false)
const heroAnimated = ref(false)
const aboutAnimated = ref(false)
const workAnimated = ref(false)
const contactAnimated = ref(false)
const currentTime = ref('')

// Component refs
const heroSectionRef = ref(null)
const aboutSectionRef = ref(null)
const workSectionRef = ref(null)
const contactSectionRef = ref(null)

// Methods
const handleScroll = () => {
  const scrollTop = window.pageYOffset
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollTop / docHeight) * 100
  
  showNav.value = scrollTop > 100
  
  // Trigger animations based on scroll position
  const triggerAnimation = (sectionRef, setter, offset = 0.3) => {
    if (sectionRef.value?.heroSection || sectionRef.value?.aboutSection || 
        sectionRef.value?.workSection || sectionRef.value?.contactSection) {
      const element = sectionRef.value.heroSection || 
                    sectionRef.value.aboutSection || 
                    sectionRef.value.workSection || 
                    sectionRef.value.contactSection
      
      if (element) {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * (1 - offset)
        setter(isVisible)
      }
    }
  }
  
  triggerAnimation(heroSectionRef, (val) => heroAnimated.value = val, 0.8)
  triggerAnimation(aboutSectionRef, (val) => aboutAnimated.value = val)
  triggerAnimation(workSectionRef, (val) => workAnimated.value = val)
  triggerAnimation(contactSectionRef, (val) => contactAnimated.value = val)
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (!element) return
  
  const targetPosition = element.offsetTop - 80 // Account for nav height
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = 1200 // 1.2 seconds for smooth scroll
  let start = null

  // Custom easing function for smooth animation
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }

  const animation = (currentTime) => {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = easeInOutCubic(progress)
    
    window.scrollTo(0, startPosition + distance * ease)
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }
  
  requestAnimationFrame(animation)
}

const handleViewProject = (project) => {
  console.log('Viewing project:', project)
  // Handle project view logic
}

const handleFormSubmit = (formData) => {
  console.log('Form submitted:', formData)
  // Handle form submission logic
}

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', { 
    timeZone: 'America/Los_Angeles',
    hour12: false 
  })
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial call
  
  // Start time updates
  updateTime()
  setInterval(updateTime, 1000)
  
  // Trigger hero animation after mount
  setTimeout(() => {
    heroAnimated.value = true
  }, 500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Enhanced smooth scrolling for webkit browsers */
* {
  -webkit-overflow-scrolling: touch;
}

/* Disable default smooth scroll to use our custom implementation */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: auto;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.portfolio-container {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  overflow-x: hidden;
}

/* Scroll Progress */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  z-index: 1000;
  transition: width 0.3s ease;
}

/* Footer */
.footer {
  background: #000000;
  padding: 40px 24px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
