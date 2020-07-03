<template>
  <div>
    <div :style="parent">
      <template>
        <vue-draggable-resizable
          :style="{zIndex:control.style.zIndex}"
          v-for="control in modal.controls"
          :key="control.id"
          :w="parseInt(control.style.width)"
          :h="parseInt(control.style.height)"
          :x="parseInt(control.style.left)"
          :y="parseInt(control.style.top)"
          :parent="true"
          @resizing="(x,y,width,height)=>onResize(control,x,y,width,height)"
          @dragstop="(left, top) => dragstop(control, left, top)"
          @deactivated="onDeactivated"
          @activated="onActivated"
        >
          <CustomLabel v-if="control.type==='Label'" :control="control" :modal="modal" />
          <CustomButton v-if="control.type==='CommandButton'" :control="control" :modal="modal" />
         
          <!--  <label :style="v">kkkkkk</label> -->
          <!-- <input
            :id="control.id"
            :key="control.id"
            :style="control.style"
            ref="i"
            @click="customInputClick(control.id)"
          /> -->
        </vue-draggable-resizable>
      </template>
    </div>
  </div>
</template>


<script>
import CustomLabel from "./CustomLabel";
import CustomButton from "./CustomButton"
/* import CustomInput from "./CustomInput"; */
import VueDraggableResizable from "./vue-draggable-resizable";

export default {
  components: {
     CustomLabel,
     CustomButton,
    /* CustomInput, */
    VueDraggableResizable
  },
  data() {
    return {
      parent: {
        width: "98%",
        height: "98%",
        position: "absolute",
        backgroundColor: ""
      },
      style:
      {
        zIndex:20
      },
      
    };
  },
  props: {
    modal: Object
  },

  methods: {
    onResize(control, x, y, width, height) {
      /*  console.log("nnnn"); */
      control.style.width = `${width}px`;
      control.style.height = `${height}px`;
      control.style.left = `${x}px`;
      control.style.top = `${y}px`;
      /*  console.log("jjjjjjjjjjj", x, y, width, height, control);

      console.log(); */
    },
    dragstop(control, x, y) {
      control.style.left = `${x}px`;
      control.style.top = `${y}px`;
    },
    onDeactivated() {
      /* console.log("deactive"); */
    },
    onActivated() {
      /*  console.log(this.$refs.vdr); */
      /* console.log("active"); */
    },

    customInputClick(controlId) {
       
      for (let i = 0; i < this.$refs.i.length; i++) {
        if (this.$refs.i[i].id == controlId) {
          this.controlPrevZindex= ++this.controlPrevZindex;
          this.$refs.i[i].focus();
          
          console.log("style of input", this.$refs.i[i].style.zIndex);
        }
      }

      /* this.$refs.i.focus(); */

      console.log("jjjjj");
    }
  }
}
</script>


<style  scoped>
:root {
  --main-bg-color:red;
}
.styleCss{
   background-color: var(--main-bg-color);
}
</style>