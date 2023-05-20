import { createApp } from 'vue'
import App from './App.vue'
import Toast, { POSITION } from 'vue-toastification'
import router from './router'
import '@/assets/css/tailwind.css'
import 'animate.css';
import 'vue-toastification/dist/index.css';

const app = createApp(App)
app.use(router)
app.use(Toast, { position: POSITION.BOTTOM_RIGHT });
app.mount('#app')
