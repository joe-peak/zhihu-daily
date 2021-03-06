// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MintUI from 'mint-ui';
import store from '@/store';

import 'mint-ui/lib/style.css';
import '../static/style/animate.styl';
import '../static/style/reset.styl';
import '../static/style/rem.styl';

Vue.config.productionTip = false;
Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
