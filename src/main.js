import './assets/main.css'
import './assets/styles/style.css';  // Make sure the path is relative to the main.js file


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
