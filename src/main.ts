import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const fun = () => {
  console.log('this is test')
}

fun()
