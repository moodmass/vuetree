<template>
  <div class="vue-tree">
    <ul>
      <tree-node :node.sync="option.root"></tree-node>
    </ul>
  </div>
</template>
<script>
  import TreeNode from './tree-node.vue';
  export default {
    name: 'VueTree',
    props: {
      option: {
        type: Object
      }
    },
    components: {
      TreeNode
    }
  };
</script>
