<template>
  <section id="contact" class="contact-section" ref="contactSection">
    <div class="section-container">
      <div class="contact-content">
        <div class="contact-header" :class="{ 'animate-in': isAnimated }">
          <span class="section-number">04</span>
          <h2 class="contact-title">Let's Connect</h2>
          <p class="contact-subtitle">
            Interested in my work? Here are my details.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Main Contact Card -->
          <div class="contact-main-card" :class="{ 'animate-in': isAnimated }">
            <div class="contact-avatar">
              <div class="avatar-image">
                <div class="avatar-icon">👋</div>
              </div>
              <div class="avatar-glow"></div>
            </div>

            <div class="contact-details">
              <h3 class="contact-name">John Renz Natividad</h3>
              <p class="contact-role">Freelance Developer</p>

              <div class="contact-methods">
                <a href="mailto:john@example.com" class="contact-method primary">
                  <div class="method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div class="method-content">
                    <span class="method-label">Email</span>
                    <span class="method-value">natividadjohnrenz3232@gmail.com</span>
                  </div>
                  <div class="method-arrow">→</div>
                </a>

                <a href="tel:+1234567890" class="contact-method">
                  <div class="method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div class="method-content">
                    <span class="method-label">Phone</span>
                    <span class="method-value">+639206753208</span>
                  </div>
                  <div class="method-arrow">→</div>
                </a>
              </div>
            </div>
          </div>

          <!-- Info Cards -->
          <div class="contact-info-cards">
            <div class="info-card location-card" :class="{ 'animate-in': isAnimated }">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div class="card-content">
                <h4 class="card-title">Location</h4>
                <p class="card-value">Quezon City, Philippines</p>
                <p class="card-detail">Available for remote work worldwide</p>
              </div>
            </div>

            <div class="info-card timezone-card" :class="{ 'animate-in': isAnimated }">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div class="card-content">
                <h4 class="card-title">Local Time</h4>
                <p class="card-value">{{ currentTime }}</p>
              </div>
            </div>

            <div class="info-card availability-card" :class="{ 'animate-in': isAnimated }">
              <div class="card-icon">
                <div class="status-indicator"></div>
              </div>
              <div class="card-content">
                <h4 class="card-title">Availability</h4>
                <p class="card-value">Open for Projects</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="social-section" :class="{ 'animate-in': isAnimated }">
          <h3 class="social-title">Find me elsewhere</h3>
          <div class="social-grid">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" class="social-card" target="_blank"
              rel="noopener noreferrer">
              <div class="social-icon">
                <component :is="social.icon" />
              </div>
              <div class="social-content">
                <span class="social-name">{{ social.name }}</span>
                <span class="social-handle">{{ social.handle }}</span>
              </div>
              <div class="social-arrow">↗</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  isAnimated: {
    type: Boolean,
    default: false
  }
})

const contactSection = ref(null)
const currentTime = ref('')

const socialLinks = [
  {
    name: 'Facebook',
    handle: '@jhnrnzntvdd6',
    url: 'https://www.facebook.com/jhnrnzntvdd6',
    icon: 'TwitterIcon'
  },
  {
    name: 'LinkedIn',
    handle: '/in/john-renz-natividad',
    url: 'https://www.linkedin.com/in/john-renz-natividad//',
    icon: 'LinkedInIcon'
  },
  {
    name: 'GitHub',
    handle: '@kiddor3nz',
    url: 'https://github.com/kiddor3nz',
    icon: 'GitHubIcon'
  },
]



const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Manila',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit'
  })
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})

defineExpose({
  contactSection
})
</script>

<style scoped>
.contact-section {
  background: linear-gradient(180deg, #0a0a0a 0%, #000000 100%);
  position: relative;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px;
}

.contact-header {
  text-align: center;
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.section-number {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
  display: block;
  margin-bottom: 16px;
}

.contact-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  margin-bottom: 24px;
  background: linear-gradient(45deg, #ffffff, rgba(255, 255, 255, 0.6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-subtitle {
  font-size: 20px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 80px;
}

.contact-main-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(20px);
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.2s;
}

.contact-avatar {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 32px;
}

.avatar-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  position: relative;
  z-index: 2;
}

.avatar-glow {
  position: absolute;
  inset: -15px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  filter: blur(15px);
  opacity: 0.4;
  animation: avatarGlow 3s ease-in-out infinite alternate;
}

@keyframes avatarGlow {
  0% {
    opacity: 0.4;
    transform: scale(1);
  }

  100% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.contact-name {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.contact-role {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 32px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.contact-method.primary {
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border-color: rgba(102, 126, 234, 0.3);
}

.method-icon {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.7);
}

.method-icon svg {
  width: 100%;
  height: 100%;
}

.method-content {
  flex: 1;
  text-align: left;
}

.method-label {
  display: block;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.method-value {
  display: block;
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
}

.method-arrow {
  color: rgba(255, 255, 255, 0.4);
  transition: transform 0.3s ease;
}

.contact-method:hover .method-arrow {
  transform: translate(4px, -4px);
}

.contact-info-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 16px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.location-card {
  transition-delay: 0.3s;
}

.timezone-card {
  transition-delay: 0.4s;
}

.availability-card {
  transition-delay: 0.5s;
}

.card-icon {
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.6);
  flex-shrink: 0;
}

.card-icon svg {
  width: 100%;
  height: 100%;
}

.status-indicator {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  animation: statusPulse 2s infinite;
}

@keyframes statusPulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.card-title {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-value {
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 4px;
}

.card-detail {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
}

.social-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.6s;
}

.social-title {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 32px;
  text-align: center;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.social-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.social-icon {
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.7);
}

.social-content {
  flex: 1;
}

.social-name {
  display: block;
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 2px;
}

.social-handle {
  display: block;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}

.social-arrow {
  color: rgba(255, 255, 255, 0.4);
  transition: transform 0.3s ease;
}

.social-card:hover .social-arrow {
  transform: translate(4px, -4px);
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .social-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 80px 16px;
  }

  .contact-main-card {
    padding: 24px;
  }
}
</style>
