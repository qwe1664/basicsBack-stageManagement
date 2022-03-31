import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

// import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'  // 全局样式的引入

Vue.use(ElementUI);
Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
