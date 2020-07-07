<template>
  <div>
    <input
      v-if="control"
      :id="control.id"
      :key="control.id"
      :ref="control.name+control.id"
      :style="control.style"
      @click="customInputClick(control)"
    />
  </div>
</template>

<script>
export default {
  name: "customInput",
  props: {
    control: Object,
    modal: Object
  },
  methods: {
    customInputClick() {
      this.modal.controlZIndex = ++this.modal.controlZIndex;
      this.control.style.zIndex = this.modal.controlZIndex;
    }
  }
};
</script>