<template>
  <div>
    <div class="firstrow">
     <!--  Microsoft Visual Basic for Applications - Book1
      <span class="buttons">
        <button class="min">_</button>
        <button class="max">[]</button>
        <button class="close1">X</button>
      </span> -->
      <div class="ui-titlebar">
        <!--<div class="ui-titleicon"></div>-->
        <div class="ui-titletext">Microsoft Visual Basic for Applications - Book1</div>
        <div class="ui-titlecontrols">
          <button class="ui-btn minimize">
            <svg x="0px" y="0px" viewBox="0 0 10.2 1">
              <rect x="0" y="50%" width="10.2" height="1" />
            </svg>
          </button>
          <button class="ui-btn maximize">
            <svg viewBox="0 0 10 10">
              <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" />
            </svg>
          </button>
          <button class="ui-btn close">
            <svg viewBox="0 0 10 10">
              <polygon
                points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
              />
            </svg>
          </button>
        </div>
      </div>

      <!--
Unmaximize/restore
<svg viewBox="0 0 10.2 10.1"><path d="M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z" /></svg>
      -->
    </div>

    <div class="secondrow">
      <i style="float:left" class="material-icons">&#xe5d4;</i>
      <button class="tablink" id="defaultOpen">
        <u>F</u>ile
      </button>
      <button class="tablink">
        <u>E</u>dit
      </button>
      <button class="tablink" @click="selectToolBox">
        <u>V</u>iew
        <!-- <ul @click="openToolBox" v-if="selectedToolBox">
          <li>ToolBox</li>
        </ul>-->
      </button>
      <button class="tablink" @click="selectUserForm">
        <u>I</u>nsert
        <!-- <select @click="openUserForm" v-if="selectedUserForm">
          <option>UserForm</option>
        </select>-->
      </button>
      <button class="tablink">
        <u>F</u>ormat
      </button>
      <button class="tablink">
        <u>D</u>egub
      </button>
      <button class="tablink">
        <u>R</u>un
      </button>
      <button class="tablink">
        <u>T</u>ools
      </button>
      <button class="tablink">
        <u>A</u>dd-Ins
      </button>
      <button class="tablink">
        <u>W</u>indow
      </button>
      <button class="tablink">
        <u>H</u>elp
      </button>
    </div>

    <div class="thirdrow">
      <i class="material-icons">&#xe5d4;</i>
      <i style="font-size:17px" class="fa">&#xf1c3;</i>
      <i style="font-size:17px" class="fa">&#xf0c7;</i>
      <i style="font-size:17px" class="fa">&#xf0c4;</i>
      <i style="font-size:17px" class="fa">&#xf0c5;</i>
      <i style="font-size:17px" class="fa">&#xf0ea;</i>
      <i style="font-size:17px" class="fa">&#xf0e2;</i>
      <i style="font-size:17px" class="fa">&#xf01e;</i>
      <i style="font-size:15px" class="fa">&#xf04b;</i>
      <i style="font-size:17px" class="fa">&#xf28c;</i>
      <i style="font-size:17px" class="fa">&#xf04d;</i>
    </div>
  </div>
</template>


<script >
export default {
  name: "Header",
  data() {
    return {
      selectedToolBox: false,
      selectedUserForm: false
    };
  },
  methods: {
    openToolBox: function() {
      console.log("ToolBox");
    },
    openUserForm: function() {
      console.log("UserForm");
    },
    selectToolBox: function() {
      this.selectedToolBox = true;
    },
    selectUserForm: function() {
      this.selectedUserForm = true;
      this.$emit("addUserForm");
    }
  }
};
</script>

<style scoped>
.body {
  width: 100%;
}
.tablink {
  background-color: rgba(240, 234, 234, 0.877);
  color: rgb(17, 17, 17);
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
  border: none;
  float: left;
}

.tablink:hover {
  background-color: #4dbce0;
}

.firstrow {
  font-size: 15px;
}
.secondrow {
  border: 1px transparent;
  /* color: rgba(194, 189, 189, 0.616); */
  padding: 5px;
  background-color: rgba(240, 234, 234, 0.877);
  height: 20px;
}
.buttons {
  float: right;
  line-height: normal;
}
.min .max .close1 {
  width: 40px;
}
.close1:hover {
  background-color: red;
}
.fa {
  padding: 3px;
  margin: 2px;
}
.material-icons {
  size: 15px;
}
i:hover {
  background-color: #4dbce0;
  cursor: default;
}

.ui-titlebar {
  display: flex;
  width: 100%;
  height: 32px;
  background: #0072c6;
  user-select: none;
  cursor: default;
}
.ui-titleicon {
  flex-grow: 1;
  max-width: 32px;
  max-height: 32px;
}
.ui-titletext {
  flex-grow: 2;
  max-height: 32px;
  width: auto;
  font: 12px/32px "Segoe UI", Arial, sans-serif;
  color: #fff;
  text-indent: 10px;
}
.ui-titlecontrols {
  max-width: 144px;
  max-height: 32px;
  flex-grow: 1;
}
.ui-btn {
  margin: 0;
  width: 48px;
  height: 32px;
  border: 0;
  outline: 0;
  background: transparent;
}
.ui-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
.ui-btn.close:hover {
  background: #e81123;
}
.ui-btn svg path,
.ui-btn svg rect,
.ui-btn svg polygon {
  fill: #fff;
}
.ui-btn svg {
  width: 10px;
  height: 10px;
}
</style>