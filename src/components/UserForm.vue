<template>
  <div>
    <div v-bind:key="index" v-for="(modal,index) in userForms">
      <div
        :style="modal.outerWindowStyle.container"
        ref="outerWindowContainerRef"
        @click="make(modal)"
        v-resize
        @resize="onOuterWindowResize($event,modal)"
      >
        <div :style="modal.outerWindowStyle.top" @mousedown="dragMouseDown($event,modal.id)">
          <span>Book1 {{modal.name}} (UserForm)</span>
          <OuterWindowButton :userForm="modal" @closeWindow="closeWindow" />
        </div>

        <div :style="modal.innerWindowStyle.container" v-resize @resize="onResize($event,modal.id)">
          <div :style="modal.innerWindowStyle.top">
            <span>{{modal.name}}</span>

            <img
              class="close"
              :style="modal.innerWindowStyle.closeButton"
              src="https://img.icons8.com/fluent/48/000000/close-window.png"
            />
          </div>
          <div
            @mouseup="handleMouseUp(modal.name)"
            :style="modal.innerWindowStyle.innerContainer"
            @click="createTool($event,modal.id)"
            @mousedown="handleMouseDown(modal.name)"
          >
            <drag-selector
              v-model="checkedList"
              @change="handleDragSelectorChange"
              class="drag-selector"
              ref="dragselector"
            >
              <UserFormControl :modal="modal" :ref="modal.name" />
            </drag-selector>
          </div>
        </div>
      </div>
    </div>
    <Dragable ref="child" />
  </div>
</template>

<script>
import Dragable from "./Dragable";
import UserFormControl from "./UserFormControl";
import OuterWindowButton from "./OuterWindowButton.vue";
import labelControl from "./models/labelControl";
import commandButtonControl from "./models/commandButtonControl";
import { EventBus } from "./event-bus.js";

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
      commandButtonControlData: commandButtonControl,
      selectedAreaStyle: ""
    };
  },
  mounted() {
    EventBus.$on(
      "selectedControlOption",
      (selectedForm, selectedControlOption) => {
        let userFormControlRef = this.$refs;

        for (let i = 0; i < this.userForms.length; i++) {
          console.log(userFormControlRef[this.userForms[i].name]);
          for (let j = 0; j < this.userForms[i].controls.length; j++) {
            userFormControlRef[this.userForms[i].name][0].$children[
              j
            ].active = false;
          }
        }

        for (let key in userFormControlRef) {
          if (key === selectedForm.name) {
            console.log("=================================================");
            console.log(userFormControlRef[key][0].$children);
            for (
              let i = 0;
              i < userFormControlRef[key][0].$children.length;
              i++
            ) {
              if (
                userFormControlRef[key][0].$children[i].$attrs.id ===
                selectedControlOption.id
              ) {
                userFormControlRef[key][0].$children[i].active = true;
              }
            }
          }
        }
      }
    );
  },
  props: {
    userForms: Array,
    selectedControl: String
  },

  methods: {
    handleMouseDown() {},
    handleMouseUp() {
      console.log(this.$refs.dragselector[0].selectAreaStyle);
      if (this.selectedControl != "") {
        this.selectedAreaStyle = this.$refs.dragselector[0].selectAreaStyle;
      }
    },

    onResize(e, userFormId) {
      this.$emit("innerWindowResize", e.detail, userFormId);
    },
    onOuterWindowResize(e, modal) {
      modal.outerWindowStyle.container.width = e.detail.width;
      modal.outerWindowStyle.container.height = e.detail.height;
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
            left: this.selectedAreaStyle.left,
            top: this.selectedAreaStyle.top,
            width:
              this.selectedAreaStyle.width === "0px"
                ? labelControlD.style.width
                : this.selectedAreaStyle.width,
            height:
              this.selectedAreaStyle.height === "0px"
                ? labelControlD.style.height
                : this.selectedAreaStyle.height
          }
        };

        this.$emit("addControl", tool, pos);
      } else if (this.selectedControl == "commandbutton") {
        let commandButtonControlD = JSON.parse(
          JSON.stringify(this.commandButtonControlData)
        );

        const tool = {
          ...commandButtonControlD,
          id: this.userForms[pos - 1].controls.length + 1,
          style: {
            ...commandButtonControlD.style,
            left: this.selectedAreaStyle.left,
            top: this.selectedAreaStyle.top,
            width:
              this.selectedAreaStyle.width === "0px"
                ? labelControlD.style.width
                : this.selectedAreaStyle.width,
            height:
              this.selectedAreaStyle.height === "0px"
                ? labelControlD.style.height
                : this.selectedAreaStyle.height
          }
        };
        this.$emit("addControl", tool, pos);
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 24px;
}
</style>


