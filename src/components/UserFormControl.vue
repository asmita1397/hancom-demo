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
          @deactivated="onDeactivated"
          @activated="onActivated(modal,control)"
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
import { EventBus } from "./event-bus";

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
      deletingControlId: -1,
      deletingUserFormId: -1,
      style: {
        zIndex: 20
      }
    };
  },
  props: {
    modal: Object
  },
  mounted() {
    document.addEventListener("keydown", this.deleteSingleControl);
  },

  methods: {
    deleteSingleControl(e) {
      if (e.keyCode === 46) {
        if (this.deletingUserFormId !== -1 && this.deletingControlId !== -1) {
          if (this.modal.id === this.deletingUserFormId) {
            this.modal.controls.splice(this.deletingControlId, 1);

            this.deletingControlId = -1;
            this.deletingUserFormId = -1;
            EventBus.$emit("userFormClicked", this.modal, this.modal);
          }
        }
      }
    },
    onDeactivated() {
      this.deletingControlId = -1;
      this.deletingUserFormId = -1;
    },
    onActivated(modal, control) {
      for (let i = 0; i < modal.controls.length; i++) {
        if (modal.controls[i].id === control.id) {
          this.deletingControlId = i;
          this.deletingUserFormId = modal.id;
        }
      }
    },
    onResize(control, x, y, width, height) {
      control.style.width = `${width}px`;
      control.style.height = `${height}px`;
      control.style.left = `${x}px`;
      control.style.top = `${y}px`;
    },
    dragstop(control, x, y) {
      control.style.left = `${x}px`;
      control.style.top = `${y}px`;
    }
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