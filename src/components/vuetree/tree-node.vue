<template>
  <li :class="{parent_li: node.isParent}">
    <i v-if="node.isParent" v-on:click="toggle(node)" class="fa icon-open-state"
       v-bind:class="{ 'fa-plus-square-o': !node.isOpen, 'fa-minus-square-o': node.isOpen }"></i>
    <span :title="node.title">
        <i v-if="showIcon(node)" :class="nodeClass(node)"></i> {{node.name}}</span>
    <a v-for="btn in node.buttons" class="ml5" href="javascript:" :title="btn.title" v-on:click="btnClick(btn, node)">
      <i :class="btn.icon"></i></a>
    <ul v-show="node.isOpen">
      <li v-show="node.showLoading && node._loading"><i class="fa fa-spinner fa-pulse"></i></li>
      <tree-node v-for="item in node.children" :key="item" :node="item"></tree-node>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'TreeNode',
    props: {
      node: {
        type: Object
      }
    },
    methods: {
      showIcon(node) {
        return node.icon || node.openedIcon || node.closedIcon;
      },
      nodeClass(node) {
        if (node.isOpen) {
          return node.openedIcon || node.icon;
        } else {
          return node.closedIcon || node.icon;
        }
      },
      toggle:function(node){
        if (node.hasOwnProperty('isOpen')) {
          node.isOpen = !node.isOpen;
        } else {
          this.$set(node, 'isOpen', true);
        }
      },
      btnClick(btn, node){
        if (typeof btn.click === 'function') {
          btn.click(node);
        }
      }
    },
    watch: {
      'node.isOpen'(val) {
        if (!this.node.hasOwnProperty('_loading')) {
          this.$set(this.node, '_loading', false);
          //this.node['_loading'] = false;
        }
        if (val) {
          if (typeof this.node.onOpened === 'function') {
            this.node.onOpened(this.node);
          }
        } else {
          if (typeof this.node.onClosed === 'function') {
            this.node.onClosed(this.node);
          }
        }
      }
    }
  };
</script>

