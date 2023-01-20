import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

if (import.meta.env.PROD) {
  const root = document.createElement('div')
  document.body.appendChild(root)
  createApp(App).mount(root)
} else {
  createApp(App).mount('#app')
}


