// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { pinia } from './store'
import './assets/styles/main.scss'

createApp(App).use(pinia).use(router).mount('#app')
