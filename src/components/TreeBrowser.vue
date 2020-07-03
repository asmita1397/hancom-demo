<template >
  <div class="tree" style="min-height:'50px'">
    <div @click="nodeClicked" :style="{'margin-left': `${depth * 2}px`}" class="node">
      <span v-if="hasChildren" class="type">{{expanded ? '&#9660;' : '&#9658;'}}</span>
      <span class="type" v-else>&#9671;</span>
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
    <!-- <Prop :node="root" @onClick="nodeWasClicked" /> -->
  </div>
</template>

<script>
// import Prop from "./Prop.vue";
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
    },
  },
  computed: {
    hasChildren() {
      return this.node.userForms;
    }
  }
};
</script>

<style scoped>
.tree{
  /* min-height: 300px; */
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
    cursor:pointer;
    /* color: darkslateblue; */
}
</style>

