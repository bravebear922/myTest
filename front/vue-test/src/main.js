// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import filters from './utils/filters'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// import bootstrap
import './assets/css/bootstrap.css'  
import './assets/js/bootstrap.min.js' 
import './assets/js/jquery-1.11.3.min'



import {post,fetch} from './utils/axios'
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;

// import  { ToastPlugin,ConfirmPlugin,LoadingPlugin,DatetimePlugin} from 'vux'
// Vue.use(ToastPlugin)
// Vue.use(ConfirmPlugin)
// Vue.use(LoadingPlugin)
// Vue.use(DatetimePlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
