import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { TabPlugin } from '@syncfusion/ej2-vue-navigations'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(TabPlugin) // Essential to register Syncfusion Tabs

app.mount('#app')
