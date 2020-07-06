<template>
  <div>
    <button
      v-if="control"
      :id="control.id"
      :key="control.id"
      @click.stop="customInputClick()"
      :style="control.style"
      :v-model="control.caption"
      :value="control.caption"
      :disabled="!control.enabled"
      @keyup.enter="trigger"
    >{{control.caption}}</button>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";

export default {
  name: "customButton",
  props: {
    control: Object,
    modal: Object
  },
  methods: {
    trigger(){
      alert("Hello")
    },
    customInputClick() {
      console.log("model", this.modal.controlZIndex);
      this.modal.controlZIndex = ++this.modal.controlZIndex;
      this.control.style.zIndex = this.modal.controlZIndex.toString();
      EventBus.$emit("userFormClicked", this.control, this.modal);
    }
  }
};
</script>