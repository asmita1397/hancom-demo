<template>
  <div>
    <div class="sideheader">
      <span class="sideheader1">
        Properties - {{selectedUserForm&&selectedUserForm.name}}
        <button style="float:right">
          <b>X</b>
        </button>
      </span>
    </div>
    <div class="form-group">
      <label for="userForm"></label>
      <select
        class="form-control"
        name="selectedUserForm"
        id="selectedUserForm"
        v-model="selectedOption"
        @change="handleSelectedOption(selectedUserForm,selectedOption)"
      >
        <option :value="selectedUserForm" :selected="true">{{ selectedUserForm.name }}</option>
        <option v-for="control in selectedUserForm.controls" :value="control" :key="control.id">
          <b>{{ control.name }}</b>
        </option>
      </select>

      <UserFormTable v-if="selectedOption.type==='UserForm'" :selectedUserForm="selectedUserForm" />
      <LabelControlTable v-if="selectedOption.type==='Label'" :selectedUserForm="selectedOption" />
      <CommandButtonControl
        v-if="selectedOption.type==='CommandButton'"
        :selectedUserForm="selectedOption"
      />
    </div>
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
    EventBus.$on("userFormClicked", (control, userForm) => {
      this.selectedOption = control;
      this.selectedUserForm = userForm;
    });
  },

  methods: {
    handleSelectedOption(selectedUserForm, selectedOption) {
      EventBus.$emit("selectedControlOption", selectedUserForm, selectedOption);
    }
  },
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

.sideheader1 {
  top: 0%;
  width: 250px;
  background-color: rgb(142, 191, 231);
  margin-bottom: 8px;
}
.sideheader {
  height: 22px;
  text-align: left;
  padding: 0pc;
  background-color: rgb(142, 191, 231);
}
</style>