import { createApp } from 'vue'
import App from '@/App.vue'
// import element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import globalComponent from '@/components/index'
import '@/styles/index.scss'
import pinia from './store'
//svg
import 'virtual:svg-icons-register'
import router from './router'
// get instance
const app = createApp(App)

// install element-plus
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.use(globalComponent)
app.mount('#app')
