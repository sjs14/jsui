import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@jsui/theme-chalk/src/index.less'
import Icon from '@jsui/components/Icon'

const uiCompList = [
    Icon
]

const app = createApp(App)
uiCompList.forEach(item => app.use(item))

app.mount('#app')
