import { createApp } from 'vue'
import App from './App.vue'

// import element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// get instance
const app = createApp(App)
// install element-plus
app.use(ElementPlus)
app.mount('#app')
