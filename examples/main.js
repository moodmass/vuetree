/**
 * Created by aresn on 2017-4-27.
 */
import Vue from 'vue';
import App from './App.vue';
import VueTree from '../src/index';

Vue.use(VueTree)

// 开启debug模式
Vue.config.debug = true

new Vue({
  el: '#app',
  render: h => h(App)
})
