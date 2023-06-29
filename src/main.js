import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' 
import { ValidationObserver, ValidationProvider } from 'vee-validate';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

axios.defaults.withCredentials = true;

createApp(App).use(router).mount('#app')
