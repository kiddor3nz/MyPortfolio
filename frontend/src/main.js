import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

const app = createApp(App)
pinia.use(piniaPluginPersistedstate) // 🧠 use the plugin here

app.use(router)
app.use(pinia)
app.mount('#app')
