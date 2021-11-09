import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueTableDynamic from 'vue-table-dynamic'
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueTableDynamic);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')