<template>
  <div>
    <button
      v-if="control"
      :id="control.id"
      :key="control.id"
      @mousedown="customInputClick()"
      :style="control.style"
      :title="control.title"
      :tabindex="control.tabindex"
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
    customInputClick() {
      this.modal.controlZIndex = ++this.modal.controlZIndex;
      this.control.style.zIndex = this.modal.controlZIndex.toString();
      EventBus.$emit("userFormClicked", this.control, this.modal);
    }
  }
};
</script>