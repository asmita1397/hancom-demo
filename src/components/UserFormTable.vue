<template>
  <div>
    <br/>
    <div class="btn-group" style="float:left">
      <button class="button" default>Alphabetic</button>
      <button class="button">Categorized</button>
    </div>
    <table class="table">
      <!-- <caption class="caption">Properties</caption> -->
      <tr>
        <td>(Name)</td>
        <td>
          <input disabled type="text" :value="selectedUserForm.name" @input="validateUserFormName" />
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
      <tr>
        <td>BorderStyle</td>
        <td>
          <select v-model="selectedUserForm.innerWindowStyle.container.borderStyle">
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
          <input type="text" v-model="selectedUserForm.drawBuffer" />
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
          <input type="number" v-model="selectedUserForm.innerWindowStyle.container.height" />
        </td>
      </tr>
      <tr>
        <td>HelpContextId</td>
        <td>
          <input type="number" v-model="selectedUserForm.helpContextId" />
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
          <input type="number" v-model="selectedUserForm.innerWindowStyle.container.left" />
        </td>
      </tr>
      <tr>
        <td>MouseIcon</td>
        <td>
          <input type="text" v-model="selectedUserForm.mouseIcon" />
        </td>
      </tr>
      <tr>
        <td>MousePointer</td>
        <td>
          <select v-model="selectedUserForm.mousePointer">
            <option v-for="(item,key) in mousePointer" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Picture</td>
        <td>
          <input type="text" v-model="selectedUserForm.picture" />
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
          <select v-model="selectedUserForm.PictureTiling">
            <option selected>False</option>
            <option>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>RightToLeft</td>
        <td>
          <select v-model="selectedUserForm.rightToLeft">
            <option selected>False</option>
            <option>True</option>
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
          <input type="number" v-model="selectedUserForm.scrollHeight" />
        </td>
      </tr>
      <tr>
        <td>ScrollLeft</td>
        <td>
          <input type="number" v-model="selectedUserForm.scrollLeft" />
        </td>
      </tr>
      <tr>
        <td>ScrollTop</td>
        <td>
          <input type="number" v-model="selectedUserForm.scrollTop" />
        </td>
      </tr>

      <tr>
        <td>ScrollWidth</td>
        <td>
          <input type="number" v-model="selectedUserForm.scrollWidth" />
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
          <select v-model="selectedUserForm.specialEffect">
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
          <input type="text" v-model="selectedUserForm.tag" />
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input type="number" v-model="selectedUserForm.top" />
        </td>
      </tr>
      <tr>
        <td>WhatsThisButton</td>
        <td>
          <select v-model="selectedUserForm.whatsThisButton">
            <option selected>False</option>
            <option>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>WhatsThisHelp</td>
        <td>
          <select v-model="selectedUserForm.whatsThisHelp">
            <option selected>False</option>
            <option>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Width</td>
        <td>
          <input type="number" v-model="selectedUserForm.innerWindowStyle.container.width" />
        </td>
      </tr>
      <tr>
        <td>Zoom</td>
        <td>
          <input type="number" v-model="selectedUserForm.zoom" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// import SelectDropdown from "./SelectDropdown.vue";
// import userForms from "./models/userForms.json";
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
// import borderColor from "./models/borderColor.json";
import { EventBus } from "./event-bus.js";

export default {
  name: "userFormTable",
  props: ["selectedUserForm"],
  components: {},
  data() {
    return {
      pictureSizeMode: pictureSizeMode,
      backColor: backColor,
      // root: userForms,
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
      startUpPosition: startUpPosition
    };
  },
  methods: {
    validateUserFormName(e) {
      let prms = new Promise((resolve, reject) => {
        EventBus.$emit(
          "validateUserFormName",
          this.selectedUserForm,
          e.target.value,
          resolve,
          reject
        );
      });
      prms
        .then(res => {
          console.log("Res", res);
        })
        .catch(err => {
          console.log("Erro", err);
          this.selectedUserForm.name = e.target.value;
        });
    }
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