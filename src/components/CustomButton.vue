<template>
  <div>
    <button
    
      v-if="control"
      :id="control.id"
      :key="control.id"
       @click="customInputClick()"
      :style="control.style"
      :v-model="control.caption"
      :value="control.caption"
      :disabled="!control.enabled"

    >{{control.caption}}</button>
  </div>
</template>

<script>
export default {
  name: "customButton",
  props: {
    control: Object,
    modal: Object
  },
  methods: {
    customInputClick() {
      console.log("model", this.modal.controlZIndex);
      this.modal.controlZIndex = ++this.modal.controlZIndex;
      this.control.style.zIndex = this.modal.controlZIndex.toString();
     
    }
  }
};
</script>