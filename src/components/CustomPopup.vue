<template >
  <div
    v-bind:style="{'display':isClose?'':'none'}"
    class="container"
    ref="draggableContainer"
    id="draggable-container"
  >
    <div class="top" id="draggable-header" @mousedown="dragMouseDown">
      <span class="dot">Popup</span>

      <span class="closeButton">
        <img
          class="close"
          @click="handleClose"
          src="https://img.icons8.com/fluent/48/000000/close-window.png"
        />
      </span>
    </div>
    <div class="body">
      <div class="errormsg">
        <div>
          <table>
            <tr>
              <td>
                <img class="caution" src="https://img.icons8.com/fluent/48/000000/error.png" />
              </td>
              <td>
                <span class="messageStyle">{{msg}}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="buttondiv">
      <button class="okbtn" @click="handleClose">ok</button>
      <button @click="handleClose">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomPopup",
  components: {},
  props: ["message", "showPopup"],
  data: function() {
    return {
      msg: this.message,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      },
      display: false,
      isActive: "",
      isClose: this.showPopup === "true" ? true : false
    };
  },
  methods: {
    dragMouseDown: function(event) {
      event.preventDefault();
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function(event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        "px";
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        "px";
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
    handleClick(e) {
      this.isActive = e.target.name;
      this.$emit("selectedTool", e.target.name);
    },
    handleClose() {
      this.isClose = false;
    }
  }
};
</script>

<style scoped>
button {
  padding: 5px;
  border: outset;
}
.okbtn {
  padding: 5px 15px 5px 15px;
  margin-right: 5px;
  border: outset;
}

.close {
  height: 20px;
}
.closeButton {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

hr {
  margin: 10px;
}

.group::after,
.tabBlock-tabs::after {
  clear: both;
  content: "";
  display: table;
}
.messageStyle {
  font-size: 12px;
  margin-left: -52px;
}

body {
  width: 30%;
  line-height: 1.5;
  margin: 0 auto;
}
ul {
  margin-bottom: 1.25rem;
  margin-top: 0;
  padding: 0;
  margin-left: 1.25rem;
}

.unstyledList,
.tabBlock-tabs {
  list-style: none;
  margin: 0;
  padding: 0;
}

#draggable-container {
  position: absolute;
  border: 1px solid #e3e3e1;
  background-color: #e3e3e1;
  height: 24%;
  width: 20%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  z-index: 999;
  position: absolute;
  top: 30%;
  left: 30%;
}

#draggable-header {
  padding: 10px;
  cursor: move;
  background-color: white;
}

.dot {
  display: inline-block;
  float: left;
  color: black;
}

td,
table,
th,
tr {
  border: none;
  width: 265px;
  word-break: break-word;
}

.innerContainer {
  top: 36px;
  position: absolute;
  background-color: #f1eded;
  padding: 6px;
}
.top {
  padding-top: 5px;
  background: dimgrey;
  height: 16px;
}

.shouldrender {
  display: none;
}

.content {
  display: inline-block;
  float: left;
}
.errormsg {
  margin-top: 20px;
}
.caution {
  width: 40%;
}
.body {
  width: 40%;
}
.buttondiv {
  float: right;
  margin-top: 5%;
  margin-right: 10%;
}
</style>