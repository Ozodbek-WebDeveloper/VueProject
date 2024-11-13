import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue_Plyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

createApp(App).use(Vue_Plyr,{plyr:{}}).use(router).mount('#app')
