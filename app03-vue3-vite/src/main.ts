import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Toast, { PluginOptions } from "vue-toastification"
import "vue-toastification/dist/index.css"
const options: PluginOptions = {}



const app = createApp(App)
app.use(router)
app.use(Toast, options)

app.mount('#app')
