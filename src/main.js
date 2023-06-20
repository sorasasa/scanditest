import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' //
import VueResource from 'vue-resource';

Vue.use(VueResource);
window.onload = function() {
Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true;
}

axios.defaults.withCredentials = true;//

createApp(App).use(router).mount('#app')
