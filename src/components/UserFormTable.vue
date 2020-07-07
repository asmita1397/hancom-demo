<template>
  <div>
    <div class="btn-group">
      <button class="button" default>Alphabetic</button>
      <button class="button">Categorized</button>
    </div>
    <table class="table">
      <tr>
        <td>(Name)</td>
        <td>
          <input type="text" v-model="selectedUserForm.name" @input="nameValidate" />
        </td>
      </tr>
      <tr>
        <td>BackColor</td>
        <td>
          <select v-model="selectedUserForm.innerWindowStyle.container.backgroundColor">
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BorderColor</td>
        <td>
          <select v-model="selectedUserForm.innerWindowStyle.container.borderColor">
            <option v-for="(item,key) in borderColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <!-- Not Working -->
      <tr>
        <td>BorderStyle</td>
        <td>
          <select
            v-model="selectedUserForm.innerWindowStyle.container.border"
            @change="handleBorderStyle(selectedUserForm.innerWindowStyle.container.border)"
          >
            <option v-for="(item,key) in borderStyle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Caption</td>
        <td>
          <input type="text" v-model="selectedUserForm.caption" />
        </td>
      </tr>
      <tr>
        <td>Cycle</td>
        <td>
          <select v-model="selectedUserForm.cycle">
            <option v-for="(item,key) in cycle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>DrawBuffer</td>
        <td>
          <input
            type="number"
            v-model="selectedUserForm.drawBuffer"
            @change="drawBufferValidate(selectedUserForm.drawBuffer)"
          />
        </td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td>
          <select v-model="selectedUserForm.enabled">
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Font</td>
        <td>
          <select v-model="selectedUserForm.innerWindowStyle.container.fontFamily">
            <option v-for="(item,key) in font" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ForeColor</td>
        <td>
          <select v-model="selectedUserForm.innerWindowStyle.container.color">
            <option v-for="(item,key) in foreColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.innerWindowStyle.container.height | sizeFilter"
            @change="validators.sizeValidate($event,selectedUserForm,'height')"
            @keyup.enter="validators.sizeValidate($event,selectedUserForm,'height')"
          />
        </td>
      </tr>
      <tr>
        <td>HelpContextId</td>
        <td>
          <input
            type="number"
            v-model="selectedUserForm.helpContextId"
            @change="helpContextIdValidate(selectedUserForm.helpContextId)"
          />
        </td>
      </tr>
      <tr>
        <td>KeepScrollsBarsVisible</td>
        <td>
          <select v-model="selectedUserForm.keepScrollsBarsVisible">
            <option v-for="(item,key) in keepScrollsBarsVisible" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.innerWindowStyle.container.left"
            @change="validators.sizeValidate($event,selectedUserForm,'left')"
            @keyup.enter="validators.sizeValidate($event,selectedUserForm,'left')"
          />
        </td>
      </tr>
      <tr>
        <td>MouseIcon</td>
        <td>
          <input type="file" />
        </td>
      </tr>
      <tr>
        <td>MousePointer</td>
        <td>
          <select v-model="selectedUserForm.innerWindowStyle.container.cursor">
            <option v-for="(item,key) in mousePointer" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Picture</td>
        <td>
          <input type="file" />
        </td>
      </tr>
      <tr>
        <td>PictureAlignment</td>
        <td>
          <select v-model="selectedUserForm.pictureAlignment">
            <option v-for="(item,key) in pictureAlignment" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>PictureSizeMode</td>
        <td>
          <select v-model="selectedUserForm.pictureSizeMode">
            <option v-for="(item,key) in pictureSizeMode" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>PictureTiling</td>
        <td>
          <select v-model="selectedUserForm.pictureTiling">
            <option selected>False</option>
            <option>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>RightToLeft</td>
        <td>
          <select
            v-model="selectedUserForm.rightToLeft"
            @change="rightToLeft(selectedUserForm.rightToLeft)"
          >
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ScrollBars</td>
        <td>
          <select v-model="selectedUserForm.scrollBars">
            <option v-for="(item,key) in scrollBars" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ScrollHeight</td>
        <td>
          <input type="number" :value="selectedUserForm.scrollHeight" @input="scrollHeightValidate" />
        </td>
      </tr>
      <tr>
        <td>ScrollLeft</td>
        <td>
          <input type="number" :value="selectedUserForm.scrollLeft" @input="scrollLeftValidate" />
        </td>
      </tr>
      <tr>
        <td>ScrollTop</td>
        <td>
          <input type="number" :value="selectedUserForm.scrollTop" @input="scrollTopValidate" />
        </td>
      </tr>

      <tr>
        <td>ScrollWidth</td>
        <td>
          <input type="number" :value="selectedUserForm.scrollWidth" @input="scrollWidthValidate" />
        </td>
      </tr>
      <tr>
        <td>ShowModal</td>
        <td>
          <select v-model="selectedUserForm.showModal">
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>SpecialEffect</td>
        <td>
          <select v-model="selectedUserForm.innerWindowStyle.container.boxShadow">
            <option v-for="(item,key) in specialEffect" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>StartUpPosition</td>
        <td>
          <select v-model="selectedUserForm.startUpPosition">
            <option v-for="(item,key) in startUpPosition" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Tag</td>
        <td>
          <input type="text" :value="selectedUserForm.tag" />
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.innerWindowStyle.container.top"
            @change="validators.sizeValidate($event,selectedUserForm,'top')"
            @keyup.enter="validators.sizeValidate($event,selectedUserForm,'top')"
          />
        </td>
      </tr>
      <tr>
        <td>WhatsThisButton</td>
        <td>
          <select
            v-model="selectedUserForm.whatsThisButton"
            @change="handleWhatsThis(selectedUserForm.whatsThisButton)"
          >
            <option selected>False</option>
            <option>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>WhatsThisHelp</td>
        <td>
          <select v-model="selectedUserForm.whatsThisButton">
            <option selected>False</option>
            <option>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Width</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.innerWindowStyle.container.width | sizeFilter"
            @change="validators.sizeValidate($event,selectedUserForm,'width')"
            @keyup.enter="validators.sizeValidate($event,selectedUserForm,'width')"
          />
        </td>
      </tr>
      <tr>
        <td>Zoom</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.innerWindowStyle.container.zoom"
            @input="zoomValidate"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import backColor from "./models/backColor.json";
import borderColor from "./models/borderColor.json";
import borderStyle from "./models/borderStyle.json";
import cycle from "./models/cycle.json";
import font from "./models/font.json";
import foreColor from "./models/foreColor.json";
import keepScrollsBarsVisible from "./models/keepScrollsBarsVisible.json";
import mousePointer from "./models/mousePointer.json";
import pictureAlignment from "./models/pictureAlignment.json";
import scrollBars from "./models/scrollBars.json";
import specialEffect from "./models/specialEffect.json";
import startUpPosition from "./models/startUpPosition.json";
import pictureSizeMode from "./models/pictureSizeMode.json";
import { validators } from "../validators/validator";

export default {
  name: "userFormTable",
  props: ["selectedUserForm"],
  components: {},
  data() {
    return {
      validators: validators,
      pictureSizeMode: pictureSizeMode,
      backColor: backColor,
      borderColor: borderColor,
      borderStyle: borderStyle,
      cycle: cycle,
      font: font,
      foreColor: foreColor,
      keepScrollsBarsVisible: keepScrollsBarsVisible,
      mousePointer: mousePointer,
      pictureAlignment: pictureAlignment,
      scrollBars: scrollBars,
      specialEffect: specialEffect,
      startUpPosition: startUpPosition,
      previousDrawBuffer: this.selectedUserForm.drawBuffer,
      previoushelpContextId: this.selectedUserForm.helpContextId
    };
  },
  filters: {
    sizeFilter(value) {
      return parseInt(value, 10);
    }
  },
  methods: {
    nameValidate() {},
    drawBufferValidate(data) {
      //
      // let length = data;

      console.log("outside");
      console.log(data);
      if (data > 16000 && data <= 1048576) {
        this.selectedUserForm.drawBuffer = data;
        console.log(this.selectedUserForm.drawBuffer);
      } else {
        this.selectedUserForm.drawBuffer = this.previousDrawBuffer;
      }
    },

    handleBorderStyle(data) {
      console.log(data);
    },
    helpContextIdValidate(data) {
      // <2147000000
      console.log(data);
      if (data > 2147000000) {
        alert("invalid property value");
        this.selectedUserForm.helpContextId = this.previoushelpContextId;
      }
    },
    rightToLeft(e) {
      console.log("event right2left", e);
    },
    scrollHeightValidate() {},
    scrollLeftValidate() {},
    scrollTopValidate() {},
    scrollWidthValidate() {},
    handleWhatsThis(whatsThisButton) {
      console.log("whatsThisButton  ", whatsThisButton);
    },
    zoomValidate() {}
  }
};
</script>

<style>
.node {
  text-align: left;
}
table,
th,
td {
  /* table-layout: fixed; */
  margin-right: 0%;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 11px;
  font-display: initial;
  /* font: Tahoma; */
  color: black;
}
th,
td {
  text-align: left;
}
th {
  width: 120%;

  font-size: 12px;
}

.form-control {
  float: left;
  width: 280px;
  cursor: pointer;
  background-color: rgb(190, 185, 185);
  /* border: 6px solid grey; */
}
label {
  float: left;
}
select {
  width: 100%;
}

/* Must be added as style for the new data */
.btn-group .button {
  border: none;
  color: black;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  /* float: left; */
}
.btn-group .button {
  border: none;
  color: black;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  /* float: left; */
}
</style>