import Vue from 'vue';
import Vuex from 'vuex';
import state from '@/store/state';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import demo from '@/store/module/demo.module';
import newslist from '@/store/module/newslist.module';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    demo,
    newslist
  },
  state,
  mutations,
  actions
});
