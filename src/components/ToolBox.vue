<template >
  <div>
    <vue-resizable
      class="resizable"
      ref="resizableComponent"
      :width="parseInt(style.width)"
      :height="parseInt(style.height)"
      :left="parseInt(style.left)"
      :top="parseInt(style.top)"
      v-bind:style="{'display':isClose?'none':''}"
    >
      <div ref="draggableContainer" id="draggable-container">
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
    </vue-resizable>
  </div>
</template>

<script>
import VueResizable from "vue-resizable";
import { EventBus } from "./event-bus.js";
export default {
  name: "DraggableDiv",
  components: { VueResizable },
  data: function() {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      },
      isActive: "",
      isClose: false,
      handlers: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
      style: { left: "559px", top: "307px", height: "170px", width: "330px" },
      event: "",
      dragSelector: ".drag-container-1, .drag-container-2"
    };
  },
  mounted() {
    EventBus.$on("setIsActive", tool => (this.isActive = tool));
  },
  methods: {
    setIsClose() {
      return this.isClose;
    },
    eHandler(data) {
      this.style.width = `${data.width}px`;
      this.style.height = `${data.height}px`;
      this.style.left = `${data.left}px`;
      this.style.top = `${data.top}px`;
      this.event = data.eventName;
    },
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
      if (
        this.$refs.resizableComponent.$el.offsetTop > 0 &&
        this.$refs.resizableComponent.$el.offsetLeft > 0
      ) {
        this.style.top =
          this.$refs.resizableComponent.$el.offsetTop -
          this.positions.movementY +
          "px";

        this.style.left =
          this.$refs.resizableComponent.$el.offsetLeft -
          this.positions.movementX +
          "px";
      } else {
        this.style.top = "307px";
        this.style.left = "559px";
      }
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
      this.isClose = true;
    }
  }
};
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

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

  position: absolute;
  z-index: 1;
}

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
  height: 26px;
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
  margin: 0 0 0.1rem 0;
  height: 120%;
  width: 100%;
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
  height: 70%;
  width: 90%;
}

.tabBlock-pane > :last-child {
  margin-bottom: 0;
}

.img {
  width: 12px;
  cursor: default;
}

#draggable-container {
  border: 1px solid #e3e3e1;
  background-color: #e3e3e1;
  height: inherit;
  width: inherit;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  z-index: 10000;
  top: inherit;
  left: inherit;
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

.innerContainer {
  top: 36px;
  position: absolute;
  padding: 6px;
  width: 99%;
  height: calc(94% - 37px);
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

.resizable {
  left: 559px;
  top: 307px;
  width: 300px;
  height: 139px;
  position: absolute;
  border: 1px solid;
  z-index: 100000000;
  overflow: hidden;
}
</style>
