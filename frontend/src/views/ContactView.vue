<template>
  <section id="contact" class="contact-section" ref="contactSection">
    <div class="section-container">
      <div class="contact-content">
        <div class="contact-text" :class="{ 'animate-in': isAnimated }">
          <span class="section-number">04</span>
          <h2 class="contact-title">Let's Create Something Amazing Together</h2>
          <p class="contact-description">
            Ready to bring your vision to life? I'm always excited to work on new projects 
            and collaborate with forward-thinking individuals and teams.
          </p>
          
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-label">Email</span>
              <a href="mailto:john@example.com" class="contact-value">john@example.com</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">Location</span>
              <span class="contact-value">San Francisco, CA</span>
            </div>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link" v-for="social in socialLinks" :key="social.name">
              <span class="social-name">{{ social.name }}</span>
              <div class="social-arrow">↗</div>
            </a>
          </div>
        </div>
        
        <div class="contact-form" :class="{ 'animate-in': isAnimated }">
          <form @submit.prevent="handleSubmit" class="form-container">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                class="form-input"
                required
              >
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                class="form-input"
                required
              >
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea 
                id="message" 
                v-model="form.message"
                class="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" class="form-submit">
              <span class="submit-text">Send Message</span>
              <div class="submit-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"/>
                </svg>
              </div>
            </button>
          </form>
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

defineEmits(['form-submit'])

const contactSection = ref(null)

const form = ref({
  name: '',
  email: '',
  message: ''
})

const socialLinks = [
  { name: 'Twitter', url: '#' },
  { name: 'LinkedIn', url: '#' },
  { name: 'GitHub', url: '#' },
  { name: 'Dribbble', url: '#' }
]

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // Emit event to parent component
  // $emit('form-submit', form.value)
  
  // Reset form after submission
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}

defineExpose({
  contactSection
})
</script>

<style scoped>
.contact-section {
  background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.contact-text {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.section-number {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
}

.contact-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
  background: linear-gradient(45deg, #ffffff, rgba(255, 255, 255, 0.6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 48px;
}

.contact-info {
  margin-bottom: 48px;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-value {
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.social-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #ffffff;
  padding-left: 16px;
}

.social-arrow {
  transition: transform 0.3s ease;
}

.social-link:hover .social-arrow {
  transform: translate(4px, -4px);
}

.contact-form {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.3s;
}

.form-container {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(20px);
}

.form-group {
  margin-bottom: 32px;
}

.form-label {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form-input, .form-textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: rgba(102, 126, 234, 0.5);
  background: rgba(255, 255, 255, 0.05);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 18px 32px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  justify-content: center;
}

.form-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.submit-arrow svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.form-submit:hover .submit-arrow svg {
  transform: translate(4px, -4px);
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 80px 16px;
  }
  
  .form-container {
    padding: 24px;
  }
}
</style>
