<template>
  <div class="form-group">
    <!-- <select-dropdown :userForm="userForms" v-if="selected" /> -->
    <label for="userForm"></label>
    <select
      class="form-control"
      name="selectedUserForm"
      id="selectedUserForm"
      v-model="selectedOption"
    >
      <option :value="selectedUserForm" :selected="true">{{ selectedUserForm.name }}</option>
      <option v-for="control in selectedUserForm.controls" :value="control" :key="control.id">
        <b>{{ control.name }}</b>
      </option>
      <!-- <option>
        <b>UserForm1</b> UserForm
      </option>
      <option>
        <b>Label1</b> Label
      </option>
      <option>
        <b>CommandButton1</b> CommandButton
      </option>-->
    </select>

    <UserFormTable v-if="selectedOption.type==='UserForm'" :selectedUserForm="selectedUserForm" />
    <LabelControlTable v-if="selectedOption.type==='Label'" :selectedUserForm="selectedOption" />
    <CommandButtonControl
      v-if="selectedOption.type==='CommandButton'"
      :selectedUserForm="selectedOption"
    />
  </div>
</template>

<script>
import UserFormTable from "./UserFormTable.vue";
import LabelControlTable from "./LabelControlTable.vue";
import CommandButtonControl from "./CommandButtonControl.vue";
import { EventBus } from "./event-bus.js";
export default {
  name: "SelectDropdown",
  props: ["rootSelectedControlType"],
  components: {
    UserFormTable,
    LabelControlTable,
    CommandButtonControl
  },

  mounted() {
    EventBus.$on("i-got-clicked", (control, userForm) => {
      this.selectedOption = control;
      this.selectedUserForm = userForm;
    });
  },

  // watch: {
  //   selectedUserForm: {
  //     handler(v) {
  //       this.selectedOption = v;
  //     }
  //   }
  // },
  // updated() {
  //   console.log("AA", this.selectedOption);
  //   if (this.selectedOption.type === "UserForm")
  //     this.selectedOption = this.selectedUserForm;
  // },
  methods: {},
  data() {
    return {
      selectedUserForm: {},
      selectedOption: "",
      selected: true
    };
  }
};
</script>

<style scoped>
.form-control {
  float: left;
  width: 280px;
  cursor: pointer;
  background-color: white;
}
</style>