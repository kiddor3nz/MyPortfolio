<template>
  <section id="home" class="hero-section" ref="heroSection">
    <div class="hero-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    
    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-greeting" :class="{ 'animate-in': isAnimated }">
          <span class="greeting-text">Hello, I'm</span>
        </div>
        <h1 class="hero-name" :class="{ 'animate-in': isAnimated }">
          <span class="name-part">John Renz</span>
          <span class="name-part">Natividad</span>
        </h1>
        <div class="hero-title" :class="{ 'animate-in': isAnimated }">
          <div class="title-line">
            <span class="title-text">Web Developer</span>
            <div class="title-highlight"></div>
          </div>
        </div>
        <p class="hero-description" :class="{ 'animate-in': isAnimated }">
          a Freelance Web Developer passionate about web development and software engineering.
        </p>
      </div>
      
      <div class="hero-cta" :class="{ 'animate-in': isAnimated }">
        <button class="cta-primary" @click="$emit('explore-work')">
          <span class="cta-text">Explore My Work</span>
          <div class="cta-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </button>
        <button class="cta-secondary" @click="$emit('get-in-touch')">
          <span class="cta-text">Get In Touch</span>
        </button>
      </div>
    </div>
    
    <div class="hero-scroll-indicator">
      <div class="scroll-line"></div>
      <span class="scroll-text">Scroll to explore</span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  isAnimated: {
    type: Boolean,
    default: true
  }
})

defineEmits(['explore-work', 'get-in-touch'])

const heroSection = ref(null)

defineExpose({
  heroSection
})
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #f093fb, #f5576c);
  top: 60%;
  right: 20%;
  animation-delay: 2s;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #4facfe, #00f2fe);
  bottom: 20%;
  left: 60%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
}

.hero-content {
  text-align: center;
  max-width: 800px;
  padding: 0 24px;
}

.hero-greeting {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.hero-name {
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 24px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.name-part {
  display: inline-block;
  margin-right: 0.2em;
}

.hero-title {
  margin-bottom: 32px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.3s;
}

.title-line {
  position: relative;
  display: inline-block;
  margin: 0 16px;
}

.title-text {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
}

.title-highlight {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transform: scaleX(0);
  animation: highlight 2s ease-in-out 2s forwards;
}

@keyframes highlight {
  to { transform: scaleX(1); }
}

.hero-description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.6s;
}

.hero-cta {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.9s;
}

.cta-primary, .cta-secondary {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: none;
  background: none;
  color: inherit;
}

.cta-primary {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #ffffff;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.cta-secondary {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.4);
}

.cta-arrow svg {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.cta-primary:hover .cta-arrow svg {
  transform: translate(4px, -4px);
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5), transparent);
  animation: scrollPulse 2s infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@media (max-width: 768px) {
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 0 16px;
  }
}
</style>
