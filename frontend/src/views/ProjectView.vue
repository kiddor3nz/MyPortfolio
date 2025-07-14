<template>
  <section id="work" class="work-section" ref="workSection">
    <div class="section-container">
      <div class="section-header">
        <span class="section-number">03</span>
        <h2 class="section-title">Selected Work</h2>
      </div>

      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="project.id" class="project-card"
          :class="{ 'animate-in': isAnimated }" :style="{ animationDelay: `${index * 0.2}s` }"
          @mouseenter="handleProjectHover(project, true)" @mouseleave="handleProjectHover(project, false)">
          <div class="project-image">
            <div class="project-overlay">
              <div class="project-tech">
                {{ project.technologies }}
              </div>
            </div>
            <div class="project-visual">
              <img :src="project.image" alt="Project Image" class="project-image-tag" />
            </div>
          </div>


          <div class="project-content">
            <div class="project-meta">
              <span class="project-year">{{ project.year }}</span>
              <span class="project-type">{{ project.type }}</span>
            </div>
            <h3 class="project-title">{{ project.projectName }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-links" v-if="project.link">
              <a :href="project.link" class="project-link">
                <span>View Project</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import axiosClient from '@/axios'

defineProps({
  isAnimated: {
    type: Boolean,
    default: false
  }
})

defineEmits(['view-project'])

const workSection = ref(null)


const projects = ref([])

onMounted(() => {
  axiosClient.get('/api/projects')
    .then((res) => {
      projects.value = res.data
    })
})


const handleProjectHover = (project, isHovering) => {
  // Add project hover effects here
  console.log(`Project ${project.title} hover: ${isHovering}`)
}

defineExpose({
  workSection
})
</script>

<style scoped>
.work-section {
  background: #0a0a0a;
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

.projects-grid {
  display: grid;
  gap: 48px;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  opacity: 0;
  transform: translateY(80px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.project-card:nth-child(even) {
  direction: rtl;
}

.project-card:nth-child(even)>* {
  direction: ltr;
}

.project-image {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 16px;
  overflow: hidden;
}

.project-visual {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 2;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-visual {
  transform: scale(1.1);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tech-tag {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 12px;
  color: #ffffff;
  backdrop-filter: blur(10px);
}

.project-content {
  padding: 24px 0;
}

.project-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.project-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
}

.project-description {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 24px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  color: #ffffff;
}

.project-link svg {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.project-link:hover svg {
  transform: translate(4px, -4px);
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .project-card:nth-child(even) {
    direction: ltr;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 80px 16px;
  }
}
</style>
