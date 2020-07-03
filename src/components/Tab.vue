<template>
  <div >
    <Button v-on:button-click="handleClick" text="Insert" />
    {{selected}}
    <div ref="container"></div>
    <UserForm  style="display:none"/>
    <ToolBox @handleLabel="handleLabel" />

  </div>
</template>

<script>
import Button from "./Button";
import UserForm from "./UserForm";
import Vue from "vue";
import ToolBox from "./ToolBox"
export default {
  name: "Tab",
  components: {
    Button,
    UserForm,
    ToolBox
  },
  data()
  {
      return {
          count:0
      }
  },
  props:
  {
      selected:String
  },
  methods: {
     
    handleClick() {
      
       console.log(this.count++)
      var ComponentClass = Vue.extend(UserForm);
      var instance = new ComponentClass({
        propsData: { show: true,  name:this.count }
      });
      instance.$mount(); // pass nothing
      this.$refs.container.appendChild(instance.$el);

    
    },
    handleLabel(data)
    {
        console.log("kkkkkk",data)
          this.$emit('testMethod',data)
    }
   
  }
};
</script>