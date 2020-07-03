<template>
<div style="display:none"></div>
 
</template>
<script>
export default {
 props:
 {
     eventObject:Object
 },
  data: function () {
    return {
      positions: {
        clientX: undefined,
        clientY:undefined,
        movementX: 0,
        movementY: 0
      }
    }
  },
 
  methods: {
     
    dragMouseDown(event) {
       console.log("oooooooo")
      event.preventDefault()
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      console.log("this.positions.clientX",this.positions.clientX)
    },
    elementDrag(event,data) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      data.style.top = (data.offsetTop - this.positions.movementY) + 'px'
     data.style.left = (data.offsetLeft - this.positions.movementX) + 'px'
    },
    closeDragElement () {
      document.onmouseup = null
      document.onmousemove = null
    },


  }
}
</script>




