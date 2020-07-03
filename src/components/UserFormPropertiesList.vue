<template>
  <div class="form-group">
    <!-- <select-dropdown :userForm="userForms" v-if="selected" /> -->
    <label for="userForm"></label>
    <select class="form-control" name="userForm" id="userForm">
      <option>
        <b>UserForm1</b> UserForm
      </option>
      <option>
        <b>Label1</b> Label
      </option>
      <option>
        <b>CommandButton1</b> CommandButton
      </option>
    </select>
    <UserFormTable />
    <!-- <LabelControlTable /> -->
    <!-- <CommandButtonControl /> -->
  </div>
</template>

<script>
import UserFormTable from "./UserFormTable.vue";
// import LabelControlTable from "./LabelControlTable.vue";
// import CommandButtonControl from "./CommandButtonControl.vue";
export default {
  name: "SelectDropdown",
  props: ["userForm"],
  components: {
    UserFormTable,
    // LabelControlTable,
    // CommandButtonControl
  },
  data() {
    return {
      selected: true,
      selectedUserForm: {},
      display: ["userForm"]
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