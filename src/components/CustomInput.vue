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
    customInputClick(control) {
      console.log("model", this.modal.controlZIndex);
      this.modal.controlZIndex = ++this.modal.controlZIndex;
      this.control.style.zIndex = this.modal.controlZIndex;
      /*   console.log("ref",this.$refs.Label1.focus()) */
      /*  this.$refs.i.focus();
      this.controlZIndex=++this.controlZIndex; */
      /*  console.log(controlId)
      console.log(`this.$refs.${controlId}`.focus())
      const refer=`this.$refs.${controlId}`
      console.log("refer",refer)
      console.log(this.$refs.Label)
      this.control.style.zIndex= this.controlZIndex */
    }
  }
};
</script>