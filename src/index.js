import VueTreeComp from './components/vuetree';
// 这里是重点
const VueTree = {
  install: function (Vue) {
    Vue.component('VueTree', VueTreeComp);
  }
}

// 导出组件
export default VueTree;
