import { createApp } from 'vue'
import './style.scss'
import VueMathjax from 'vue-mathjax-next';

import App from './App.vue'
createApp(App).use(VueMathjax).mount('#app')
