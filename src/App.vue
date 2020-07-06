<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <Header @addUserForm="addUserForm" />
        <hr class="hr" />
      </div>
      <div class="mainbody">
        <div class="left"></div>
        <div class="sidenav">
          <div class="sideheader">
            <span class="sideheader1">
              Project - VBAProject
              <button style="float:right">
                <b>X</b>
              </button>
            </span>
          </div>

          <div>
            <i class="material-icons">&#xe2c8;</i>
          </div>
          <hr />

          <div>
            <TreeBrowser :node="root" @onClick="nodeWasClicked" style="cursor:pointer;" />
            <hr />

            <UserFormPropertiesList />
          </div>
        </div>
        <div class="right">
          <UserForm
            @makeActive="makeActive"
            @closeWindow="closeWindow"
            :userForms="root.userForms[0].userForms"
            :selectedControl="selectedControl"
            @addControl="addControl"
            @innerWindowResize="innerWindowResize"
          />

          <ToolBox @selectedTool="selectedTool" prevModalZIndex="prevModalZIndex" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeBrowser from "./components/TreeBrowser.vue";

import UserFormPropertiesList from "./components/UserFormPropertiesList.vue";

import Header from "./components/Header.vue";
/*  */
import treeUserFormData from "./components/models/treeUserFormData.json";
import ToolBox from "./components/ToolBox";
import UserForm from "./components/UserForm";
import initialUserFormData from "./components/models/userForm.json";
import { EventBus } from "./components/event-bus.js";

export default {
  name: "App",
  components: {
    TreeBrowser,
    UserFormPropertiesList,
    Header,
    ToolBox,
    UserForm
  },
  data() {
    return {
      initialUserForm: initialUserFormData,
      selectedUserForm: {},
      selectedControl: "",
      prevModalZIndex: "",
      root: treeUserFormData
    };
  },
  methods: {
    nodeWasClicked(node) {
      this.selectedUserForm = node;
      this.makeActive(node);
      EventBus.$emit(
        "userFormClicked",
        this.selectedUserForm,
        this.selectedUserForm
      );
    },
    innerWindowResize(e, userFormId) {
      for (let i = 0; i < this.userForms.length; i++) {
        if (this.userForms[i].id === userFormId) {
          this.userForms[i].innerWindowStyle.container.width = e.width;
          this.userForms[i].innerWindowStyle.container.height = e.height;
        }
      }
    },
    addUserForm() {
      let initialUserFormD = JSON.parse(JSON.stringify(this.initialUserForm));
      let userForm = {
        ...initialUserFormD,
        id: this.root.userForms[0].userForms.length + 1,
        name: "UserForm" + (this.root.userForms[0].userForms.length + 1),
        type: "UserForm",
        outerWindowStyle: {
          ...initialUserFormD.outerWindowStyle,
          container: {
            ...initialUserFormD.outerWindowStyle.container,
            zIndex: ++this.prevModalZIndex
          }
        }
      };
      this.root.userForms[0].userForms = [
        ...this.root.userForms[0].userForms,
        userForm
      ];
      this.nodeWasClicked(
        this.root.userForms[0].userForms[
          this.root.userForms[0].userForms.length - 1
        ]
      );
    },

    addControl(tool, pos) {
      this.root.userForms[0].userForms[pos - 1].controls = [
        ...this.root.userForms[0].userForms[pos - 1].controls,
        tool
      ];
      this.selectedControl = "";
    },
    makeActive(modal) {
      this.previousZindex = ++this.prevModalZIndex;
      modal.outerWindowStyle.container.zIndex = this.previousZindex.toString();
      EventBus.$emit("userFormClicked", modal, modal);
    },
    openModal() {
      for (let i = 0; i < this.userForms.length; i++) {
        if (this.userForms[i].style.display === "block") {
          this.userForms[i].style.display = "none";
        } else {
          this.userForms[i].style.display = "block";
        }
      }
      this.show = !this.show;
    },
    closeWindow(modal) {
      console.log("modal of close", modal.id);
      for (let i = 0; i < this.root.userForms[0].userForms.length; i++) {
        if (this.root.userForms[0].userForms[i].id == modal.id) {
          this.root.userForms[0].userForms[
            i
          ].outerWindowStyle.container.display = "none";
          break;
        }
      }
    },
    selectedTool(tool) {
      this.selectedControl = tool;
    }
  }
};
</script>

<style style="scoped">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

hr {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.sidenav {
  height: 90%;
  width: 350px;
  position: fixed;
  z-index: 1;
  top: 5;
  left: 5;
  background-color: white;
  overflow-x: hidden;
  border: 2px solid grey;
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
.left {
  left: 0;
  height: 100%;
  width: 30%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
}

.right {
  right: 0;
  background-color: #80888e;
  height: 100%;
  width: 73%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
}
.container {
  width: 100%;
  max-height: 500px;
}
.mainbody,
.header,
.footer {
  padding: 5px;
}
.mainbody {
  margin-top: 46px;
  min-height: 150px;
  max-height: 388px;
  overflow: auto;
}
.header {
  height: 40px;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
  height: 40px;
  -webkit-border-top-left-radius: 5px;
  -webkit-border-top-right-radius: 5px;
  -moz-border-radius-topleft: 5px;
  -moz-border-radius-topright: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>