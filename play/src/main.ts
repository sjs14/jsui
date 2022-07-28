import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@jsui/theme-chalk/src/index.less'
import Icon from '@jsui/components/packages/Icon'
import Tree from '@jsui/components/packages/Tree'

const uiCompList = [Icon, Tree]

const app = createApp(App)
uiCompList.forEach(item => app.use(item))

app.mount('#app')
