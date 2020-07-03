<template>
  <div>
    <label
      v-if="control"
      :id="control.id"
      :key="control.id"
      :style="control.style"
      @click="customInputClick()"
      :v-model="control.caption"
      :value="control.caption"
      :disabled="!control.enabled"

    >{{control.caption}}</label>
  </div>
</template>

<script>
export default {
  name: "customLabel",
  props: {
    control: Object,
    modal: Object
  },
  methods: {
    customInputClick() {
      console.log("hiii")
      console.log("model", this.modal.controlZIndex);
      this.modal.controlZIndex = ++this.modal.controlZIndex;
      this.control.style.zIndex = this.modal.controlZIndex.toString();
     
    }
  }
};
</script>