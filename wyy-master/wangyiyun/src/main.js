import { createApp } from 'vue'
import Vant from './plug/index'
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
.use(Vant)
.use(store)
.use(router)
.mount('#app')

// 第二种写法
// const app=createApp(App)
// Vant(app)
// app.use(store)
// app.use(router).mount('#app')

