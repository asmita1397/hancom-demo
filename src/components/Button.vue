<template>
  <button class="button is-primary" @click="$emit('button-click')">
    <slot>{{text}}</slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props:{
      text:String
  },
  
}
</script>

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
