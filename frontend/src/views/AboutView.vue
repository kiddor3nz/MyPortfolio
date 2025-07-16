<template>
  <section id="about" class="about-section" ref="aboutSection">
    <div class="section-container">
      <div class="section-header">
        <span class="section-number">02</span>
        <h2 class="section-title">About Me</h2>
      </div>
      
      <div class="about-content">
        <div class="about-text">
          <div class="about-intro" :class="{ 'animate-in': isAnimated }">
            <p class="about-paragraph">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              exceptional digital experiences. With over 2 years of experience as a freelance developer, I've had the privilege 
              of working with clients.
            </p>
            <p class="about-paragraph">
              My approach combines technical skills with creative problem-solving, always striving 
              to push the boundaries of what's possible while maintaining clean, efficient code.
            </p>
          </div>
          
          <div class="skills-grid" :class="{ 'animate-in': isAnimated }">
            <div class="skill-category" v-for="(category, index) in skillCategories" :key="index">
              <h3 class="skill-title">{{ category.title }}</h3>
              <div class="skill-items">
                <span v-for="skill in category.skills" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-visual" :class="{ 'animate-in': isAnimated }">
          <div class="visual-container">
            <div class="profile-card">
              <div class="profile-image">
                <div class="image-placeholder">
                  <div class="avatar-icon">👨‍💻</div>
                </div>
                <div class="profile-glow"></div>
              </div>
              <div class="profile-stats">
                <div class="stat-item">
                  <span class="stat-number">10+</span>
                  <span class="stat-label">Projects</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">2+</span>
                  <span class="stat-label">Years</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">10+</span>
                  <span class="stat-label">Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  isAnimated: {
    type: Boolean,
    default: false
  }
})

const aboutSection = ref(null)

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'Shadcn', 'Tailwind']
  },
  {
    title: 'Backend',
    skills: ['PHP', 'Laravel', 'Python','Django', 'C++', 'REST API', 'MYSQL']
  },
  {
    title: 'Tools And Technologies',
    skills: ['Github', 'MQTT', 'Websocket']
  },
  {
    title: 'Project Management & Methodologies',
    skills: ['Agile Methodology', 'Prototyping']
  }
]

defineExpose({
  aboutSection
})
</script>

<style scoped>
.about-section {
  background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 80px;
}

.section-number {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(45deg, #ffffff, rgba(255, 255, 255, 0.6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-intro {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.about-paragraph {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
}

.skills-grid {
  display: grid;
  gap: 32px;
  margin-top: 48px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.3s;
}

.skill-category {
  padding: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.skill-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.9);
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.about-visual {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.6s;
}

.visual-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.profile-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 32px;
  backdrop-filter: blur(20px);
  text-align: center;
}

.profile-image {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 32px;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  position: relative;
  z-index: 2;
}

.profile-glow {
  position: absolute;
  inset: -20px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.3;
  animation: profileGlow 3s ease-in-out infinite alternate;
}

@keyframes profileGlow {
  0% { opacity: 0.3; transform: scale(1); }
  100% { opacity: 0.6; transform: scale(1.1); }
}

.profile-stats {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 80px 16px;
  }
}
</style>
