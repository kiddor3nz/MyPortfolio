<template>
  <section id="work" class="work-section" ref="workSection">
    <div class="section-container">
      <div class="section-header">
        <span class="section-number">03</span>
        <h2 class="section-title">Recent Work</h2>
      </div>

      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="project.id" class="project-card"
          :class="{ 'animate-in': isAnimated }" :style="{ animationDelay: `${index * 0.2}s` }"
          @mouseenter="handleProjectHover(project, true)" @mouseleave="handleProjectHover(project, false)">
          <div class="project-image">
            <div class="project-overlay">
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
            <img :src="project.image" :alt="project.title" class="project-visual" @error="handleImageError" />
          </div>

          <div class="project-content">
            <div class="project-meta">
              <span class="project-year">{{ project.year }}</span>
              <span class="project-type">{{ project.type }}</span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description" style="white-space: pre-line;">{{ project.description }}</p>
            <div class="project-links" v-if="project.link">
              <a :href="project.link" class="project-link" target="_blank" rel="noopener noreferrer">
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

import ecommerceImage from '@/assets/images/hris.png'
import ehr from '@/assets/images/ehr.png'
import iot from '@/assets/images/iot.png'
import ongoing from '@/assets/images/ongoing.png'

defineProps({
  isAnimated: {
    type: Boolean,
    default: false
  }
})

defineEmits(['view-project'])

const workSection = ref(null)

const projects = [
  {
    id: 1,
    title: 'Electronic Health Record Management System',
    description: 'This Project is designed to help Far Eastern University medical students to monitor and track patients record. ',
    type: 'Web Application',
    year: '2025',
    technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Shadcn', 'Tailwind'],
    image: ehr,
    link: 'https://github.com/pwendell256/EHRProj'
    
  },
  {
    id: 2,
    title: 'New Era University Human Resource Information System',
    description: "The University’s HR Management system updates the old system. It improves the design, speed, and ease of use while keeping and upgrading important HR tasks. Built with modern tools (Vue, Inertia, Laravel, Tailwind), it helps with:\n\n- Applicant Management: Handling job applicants from start to hiring.\n- Employee Management: Rehiring, exit steps, RFID tags, job roles, and work schedules.\n- Leave & Training: Managing time-off requests and training applications.\n- Forms & Reports: A central place to approve requests and view HR reports.\n\nThis new system makes HR tasks faster, simpler, and easier to expand for the university’s needs.",
    type: 'Web Application',
    year: '2024',
    technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Shadcn', 'Tailwind'],
    image: ecommerceImage,
    link: ''
  },
  {
    id: 3,
    title: 'IOT Incubator',
    description: `This IoT Incubator is designed to automate traditional incubators and provide real-time monitoring from anywhere.

It comes with the following features:

- Temperature Monitoring – Lets users check and adjust the temperature anytime, from anywhere.
- Humidity Monitoring – Allows users to track and modify humidity levels based on their needs.
- Egg Rotation – Gives users the flexibility to set how often the eggs should rotate each day.

All these functions can be controlled through a web application.`,
    type: 'Portfolio Site',
    year: '2024',
    technologies: ['C++', 'Django', 'Javascript', 'REST Api', 'MQTT Protocol'],
    image: iot,
    link: 'https://drive.google.com/file/d/1ks3ClMeNVfn0C1dmaa52DZ0MJZqJJNxS/view'
  },

  {
    id: 4,
    title: 'Ecommerce Website - Personal Project (Ongoing)',
    description: `Retrofit is an eCommerce website made for Retrofits to give customers an easy and smooth shopping experience. It includes useful features to help both shoppers and store owners.

    Main Features:

    Listing Management – Add, update, and manage product listings easily.

    Admin Management – Control users, orders, and store settings.

    Payment Options – Secure and flexible payment methods.

    Order Tracking – Let customers check their order status.

    User Accounts – Allow customers to create accounts for a better experience.

    Responsive Design – Works well on both desktop and mobile.`,
    type: 'Web3 Application',
    year: 'Ongoing',
    technologies: ['Django', 'Vue.js', 'Tailwind', 'REST Api'],
    image: ongoing
  }
]

const handleProjectHover = (project, isHovering) => {
  // Add project hover effects here
  console.log(`Project ${project.title} hover: ${isHovering}`)
}

const handleImageError = (event) => {
  // Fallback to a default image or gradient if image fails to load
  event.target.style.display = 'none'
  event.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  event.target.parentElement.innerHTML += '<div class="fallback-icon">🖼️</div>'
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
  width: 100%;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.project-visual {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 16px;
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
  border-radius: 16px;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-visual {
  transform: scale(1.05);
}

.fallback-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  opacity: 0.5;
  z-index: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  padding: 16px;
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

  .project-image {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 80px 16px;
  }

  .project-image {
    height: 200px;
  }
}
</style>
