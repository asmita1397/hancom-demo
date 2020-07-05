<template>
  <div>
    <div v-bind:key="index" v-for="(modal,index) in userForms">
      <div
        :style="modal.outerWindowStyle.container"
        ref="outerWindowContainerRef"
        @click="make(modal)"
      >
        <div :style="modal.outerWindowStyle.top" @mousedown="dragMouseDown($event,modal.id)">
          <span>Book1 {{modal.name}} (UserForm)</span>
          <OuterWindowButton :userForm="modal" @closeWindow="closeWindow" />
        </div>

        <div :style="modal.innerWindowStyle.container" v-resize @resize="onResize($event,modal.id)">
          <div :style="modal.innerWindowStyle.top">
            <span>{{modal.name}}</span>
            <!--  <button  disabled> -->
            <img
              class="close"
              :style="modal.innerWindowStyle.closeButton"
              src="https://img.icons8.com/fluent/48/000000/close-window.png"
            />
            <!--   </button> -->
          </div>
          <div
            ref="pos"
            :style="modal.innerWindowStyle.innerContainer"
            @click="createTool($event,modal.id)"
          >
            <UserFormControl :modal="modal" />
          </div>
        </div>
      </div>
    </div>
    <Dragable ref="child" />
  </div>
</template>

<script>
import Dragable from "./Dragable";
/* 
import customLabelData from "./CustomLabel"; */
import UserFormControl from "./UserFormControl";
import OuterWindowButton from "./OuterWindowButton.vue";
import labelControl from "./models/labelControl";
import commandButtonControl from "./models/commandButtonControl";
export default {
  name: "UserForm",
  components: {
    Dragable,
    UserFormControl,
    OuterWindowButton
  },
  data() {
    return {
      refer: "",
      labelControlData: labelControl,
      commandButtonControlData: commandButtonControl
    };
  },
  props: {
    userForms: Array,
    selectedControl: String
  },

  methods: {
    onResize(e, userFormId) {
      this.$emit("innerWindowResize", e.detail, userFormId);
    },
    make(modal) {
      this.$emit("makeActive", modal);
    },
    closeWindow(modal) {
      console.log("=================");
      this.$emit("closeWindow", modal);
    },
    dragMouseDown(event, data) {
      event.preventDefault();
      this.refer = data;
      this.$refs.child.dragMouseDown(event);
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function(event) {
      event.preventDefault();
      this.$refs.child.elementDrag(
        event,
        this.$refs.outerWindowContainerRef[this.refer - 1]
      );
    },
    closeDragElement: function(event) {
      this.$refs.child.closeDragElement(event);
    },
    createTool(e, pos) {
      console.log("-------", this.selectedControl);
      let labelControlD = JSON.parse(JSON.stringify(this.labelControlData));
      if (this.selectedControl == "label") {
        const tool = {
          ...labelControlD,
          id: this.userForms[pos - 1].controls.length + 1,
          style: {
            ...labelControl.style,
            left: `${e.layerX}px`,
            top: `${e.layerY}px`
          }
        };

        this.$emit("addControl", tool, pos);
      } else if (this.selectedControl == "commandbutton") {
        let commandButtonControlD = JSON.parse(
          JSON.stringify(this.commandButtonControlData)
        );
        /* console.log("kkk"); */
        const tool = {
          ...commandButtonControlD,
          id: this.userForms[pos - 1].controls.length + 1,
          style: {
            ...commandButtonControlD.style,
            left: `${e.layerX}px`,
            top: `${e.layerY}px`
          }
        };
        this.$emit("addControl", tool, pos);
      }
      /* else if (this.selectedControl == "input") {
        console.log("kkk");
        const tool = {
          id: this.userForms[pos - 1].controls.length + 1,
          name: "Input",
          type: "input",
          attributes: {
            value: "Good Morning"
          },
          style: {
            left: `${e.layerX}px`,
            top: `${e.layerY}px`,
            width: "100px",
            height: "40px",
            resize: "both",
            overflow: "auto",
            zIndex: "1",
            border: "1px solid black"
          }
        };
        
        this.$emit("addControl", tool, pos);
      } */
    }
  }
};
</script>

<style scoped>
img {
  width: 24px;
}
</style>


