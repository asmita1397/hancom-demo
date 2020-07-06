<template>
  <div>
    <div :style="parent">
      <template>
        <vue-draggable-resizable
          :style="{zIndex:control.style.zIndex}"
          v-for="control in modal.controls"
          :key="control.id"
          :id="control.id"
          :w="parseInt(control.style.width)"
          :h="parseInt(control.style.height)"
          :x="parseInt(control.style.left)"
          :y="parseInt(control.style.top)"
          :parent="true"
          @resizing="(x,y,width,height)=>onResize(control,x,y,width,height)"
          @dragstop="(left, top) => dragstop(control, left, top)"
        
        >
          <CustomLabel v-if="control.type==='Label'" :control="control" :modal="modal" />
          <CustomButton v-if="control.type==='CommandButton'" :control="control" :modal="modal" />

        </vue-draggable-resizable>
      </template>
    </div>
  </div>
</template>


<script>
import CustomLabel from "./CustomLabel";
import CustomButton from "./CustomButton";
import VueDraggableResizable from "./vue-draggable-resizable";

export default {
  components: {
    CustomLabel,
    CustomButton,
    VueDraggableResizable
  },
  data() {
    return {
      parent: {
        width: "98%",
        height: "98%",
        position: "absolute",
        backgroundColor: ""
      },
      style: {
        zIndex: 20
      }
    };
  },
  props: {
    modal: Object
  },

  methods: {
    onResize(control, x, y, width, height) {
      control.style.width = `${width}px`;
      control.style.height = `${height}px`;
      control.style.left = `${x}px`;
      control.style.top = `${y}px`;
    },
    dragstop(control, x, y) {
      control.style.left = `${x}px`;
      control.style.top = `${y}px`;
    },
   
  }
};
</script>


<style  scoped>
:root {
  --main-bg-color: red;
}
.styleCss {
  background-color: var(--main-bg-color);
}
</style>