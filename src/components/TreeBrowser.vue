<template >
  <div class="tree" style="min-height:'50px'">
    <div @click="nodeClicked" :style="{'margin-left': `${depth * 2}px`}" class="node">
      <span v-if="hasChildren" class="fa">{{expanded ? '[-] &#xf07c;' : '[+] &#xf07b;'}}</span>
      <span class="type" v-else>
        <i style="font-size:15px" class="fa">&#xf15c;</i>
      </span>
      {{node.name}}
    </div>

    <ul v-if="expanded">
      <TreeBrowser
        v-for="child in node.userForms"
        :key="child.name"
        :node="child"
        :depth="depth + 1"
        @onClick="(node) => $emit('onClick',node)"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: "TreeBrowser",
  props: {
    node: Object,
    depth: {
      type: Number,
      default: 0
    }
  },
  components: {
    // Prop
  },
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    nodeClicked() {
      this.expanded = !this.expanded;
      if (!this.hasChildren) {
        this.$emit("onClick", this.node);
      }
    }
  },
  computed: {
    hasChildren() {
      return this.node.userForms;
    }
  }
};
</script>

<style scoped>
.tree {
  width: 300px;
  position: initial;
  z-index: 1;
  top: 30;
  left: 0;
}
.node {
  text-align: left;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 7px;
  margin-block-end: 1px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  cursor: pointer;
}
</style>

