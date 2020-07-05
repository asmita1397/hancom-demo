<template >
  <div
    v-bind:style="{'display':isCLose?'none':''}"
    class="container"
    ref="draggableContainer"
    id="draggable-container"
  >
    <div class="top" id="draggable-header" @mousedown="dragMouseDown">
      <span class="dot">ToolBox</span>

      <span class="closeButton">
        <img
          class="close"
          @click="handleClose"
          src="https://img.icons8.com/fluent/48/000000/close-window.png"
        />
      </span>
    </div>

    <br />
    <div class="innerContainer">
      <figure class="tabBlock">
        <ul class="tabBlock-tabs">
          <li class="tabBlock-tab">Controls</li>
        </ul>
        <div class="tabBlock-content">
          <div class="tabBlock-pane">
            <div>
              <div class="tooltip">
                <button>
                  <img
                    class="img"
                    name="select"
                    @click="handleClick"
                    v-bind:style="{
                    
                    'border-style': isActive === 'select' ? 'inset' : '',
                  }"
                    src="https://img.icons8.com/android/24/000000/cursor.png"
                  />
                </button>
                <span class="tooltiptext">Select</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="label"
                    @click="handleClick"
                    v-bind:style="{
                    
                    'border-style': isActive === 'label' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/ios-filled/50/000000/a.png"
                  />
                </button>
                <span class="tooltiptext">Label</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="textbox"
                    @click="handleClick"
                    v-bind:style="{
                    
                    'border-style': isActive === 'textbox' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/dotty/80/000000/text-input-form.png"
                  />
                </button>
                <span class="tooltiptext">textbox</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="combobox"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color':
                      isActive === 'combobox' ? '#5e99f7' : '',
                    'border-style':
                      isActive === 'combobox' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/windows/32/000000/box-other.png"
                  />
                </button>
                <span class="tooltiptext">ComboBox</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="listbox"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color': isActive === 'listbox' ? '#5e99f7' : '',
                    'border-style': isActive === 'listbox' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/metro/26/000000/add-list.png"
                  />
                </button>
                <span class="tooltiptext">ListBox</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="checkbox"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color':
                      isActive === 'checkbox' ? '#5e99f7' : '',
                    'border-style':
                      isActive === 'checkbox' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/metro/26/000000/check-all.png"
                  />
                </button>
                <span class="tooltiptext">CheckBox</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="optionbutton"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color':
                      isActive === 'optionbutton' ? '#5e99f7' : '',
                    'border-style':
                      isActive === 'optionbutton' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/material-sharp/24/000000/unchecked-radio-button.png"
                  />
                </button>
                <span class="tooltiptext">OptionButton</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="togglebutton"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color':
                      isActive === 'togglebutton' ? '#5e99f7' : '',
                    'border-style':
                      isActive === 'togglebutton' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/material-sharp/24/000000/toggle-on.png"
                  />
                </button>
                <span class="tooltiptext">ToggleButton</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="frame"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color': isActive === 'frame' ? '#5e99f7' : '',
                    'border-style': isActive === 'frame' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/android/24/000000/frame.png"
                  />
                </button>
                <span class="tooltiptext">Frame</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="commandbutton"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color':
                      isActive === 'commandbutton' ? '#5e99f7' : '',
                    'border-style':
                      isActive === 'commandbutton' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/metro/24/000000/run-command.png"
                  />
                </button>
                <span class="tooltiptext">CommandButton</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="tabstrip"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color':
                      isActive === 'tabstrip' ? '#5e99f7' : '',
                    'border-style':
                      isActive === 'tabstrip' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/ios-filled/50/000000/tab.png"
                  />
                </button>
                <span class="tooltiptext">TabStrip</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="multipage"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color':
                      isActive === 'multipage' ? '#5e99f7' : '',
                    'border-style':
                      isActive === 'multipage' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/dotty/80/000000/tab.png"
                  />
                </button>
                <span class="tooltiptext">MutliPage</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="scrollbar"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color':
                      isActive === 'scrollbar' ? '#5e99f7' : '',
                    'border-style':
                      isActive === 'scrollbar' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/ios/50/000000/circled-up-2.png"
                  />
                </button>
                <span class="tooltiptext">ScrollBar</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="spinbutton"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color':
                      isActive === 'spinbutton' ? '#5e99f7' : '',
                    'border-style':
                      isActive === 'spinbutton' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/android/24/000000/sorting-arrows.png"
                  />
                </button>
                <span class="tooltiptext">SpinButton</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="image"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color': isActive === 'image' ? '#5e99f7' : '',
                    'border-style': isActive === 'image' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/material-outlined/24/000000/image.png"
                  />
                </button>
                <span class="tooltiptext">Image</span>
              </div>
              <div class="tooltip">
                <button>
                  <img
                    name="refedit"
                    @click="handleClick"
                    v-bind:style="{
                    'background-color': isActive === 'refedit' ? '#5e99f7' : '',
                    'border-style': isActive === 'refedit' ? 'inset' : '',
                  }"
                    class="img"
                    src="https://img.icons8.com/material-outlined/24/000000/edit-property.png"
                  />
                </button>
                <span class="tooltiptext">RefEdit</span>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "DraggableDiv",
  components: {},
  data: function() {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      },
      isActive: "",
      isCLose: false
    };
  },
  methods: {
    dragMouseDown: function(event) {
      event.preventDefault();
      // get the mouse cursor position at startup:
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
      // set the element's new position:
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
      console.log(this.isActive);
      console.log(e.target.name);
      console.log("tool", e.target.name);
       
      this.$emit("selectedTool", e.target.name);
    },
    handleClose() {
      this.isCLose = true;
    }
  }
};
</script>

<style scoped>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: auto;
  background-color: #fcfccf;
  color: black;
  font-size: 12px;
  text-align: center;
  padding: 5%;
  top: 100%;
  left: 50%;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

button {
  padding: 0;
  margin: 10px;
  border: none;
  background: white;
}

.close {
 
 height:26px;
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

body {
  width: 30%;
  line-height: 1.5;
  margin: 0 auto;
  /* padding: 2.5rem 1.25rem; */
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

.tabBlock {
  margin: 0 0 0.1rem 0;
}
/* #f3f2f1 */
.tabBlock-tab {
  background-color: #fff;
  border-color: #d8d8d8;
  border-left-style: solid;
  border-top: solid;
  border-width: 2px;
  color: #b5a8c5;
  cursor: default;
  display: inline-block;
  font-weight: 600;
  float: left;
  padding: 0.2rem 1.2rem;
  position: relative;
}
.tabBlock-tab:last-of-type {
  border-right-style: solid;
  color: black;
  font-weight: 100;
}

.tabBlock-content {
  background-color: #fff;
  border: 2px solid #d8d8d8;
  border-style: outset;
}

.tabBlock-pane > :last-child {
  margin-bottom: 0;
}

.img {
  width: 12px;
  cursor: default;
}
.img:hover {
  /*  background: #5e99f7; */
}

#draggable-container {
  position: absolute;
  border: 1px solid #e3e3e1;
  background-color: #e3e3e1;
  height: 150px;
  width: 33%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  z-index: 10000;
  position: absolute;
  top: 338px;
  left: 614px;
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

.container {
  /*  width:29% */
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

.content {
  display: inline-block;
  float: left;
}
</style>
