<template>
  <div>
    <label
      v-if="control"
      :id="control.id"
      :key="control.id"
      :style="control.style"
      @click.stop="customInputClick($event)"
      :v-model="control.caption"
      :value="control.caption"
      :disabled="!control.enabled"
      @keyup.enter="trigger"
    >{{control.caption}}</label>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  name: "customLabel",
  props: {
    control: Object,
    modal: Object
  },
  methods: {
    trigger(e) {
      console.log(e);
      alert("Hello boss");
    },
    customInputClick() {
      this.modal.controlZIndex = ++this.modal.controlZIndex;
      this.control.style.zIndex = this.modal.controlZIndex.toString();
      EventBus.$emit("i-got-clicked", this.control, this.modal);
    }
  }
};
</script>