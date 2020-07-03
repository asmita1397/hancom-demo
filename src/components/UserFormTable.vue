<template>
  <div>
    <div class="btn-group">
      <button class="button" default>Alphabetic</button>
      <button class="button">Categorized</button>
    </div>
    <table class="table">
      <!-- <caption class="caption">Properties</caption> -->
      <tr>
        <td>(Name)</td>
        <td>
          <input type="text" />
        </td>
      </tr>
      <tr>
        <td>BackColor</td>
        <td>
          <select :value="backColor">
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BorderColor</td>
        <td>
          <select :value="borderColor">
            <option v-for="(item,key) in borderColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BorderStyle</td>
        <td>
          <select :value="borderStyle">
            <option v-for="(item,key) in borderStyle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Caption</td>
        <td>
          <input type="text" :value="caption" />
        </td>
      </tr>
      <tr>
        <td>Cycle</td>
        <td>
          <select :value="cycle">
            <option v-for="(item,key) in cycle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>DrawBuffer</td>
        <td>
          <input type="text" :value="drawBuffer" />
        </td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td>
          <select :value="enabled">
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Font</td>
        <td>
          <select :value="font">
            <option v-for="(item,key) in font" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ForeColor</td>
        <td>
          <select :value="foreColor">
            <option v-for="(item,key) in foreColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>
          <input type="number" :value="height" />
        </td>
      </tr>
      <tr>
        <td>HelpContextId</td>
        <td>
          <input type="number" :value="helpContextId" />
        </td>
      </tr>
      <tr>
        <td>KeepScrollsBarsVisible</td>
        <td>
          <select :value="keepScrollsBarsVisible">
            <option v-for="(item,key) in keepScrollsBarsVisible" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td>
          <input type="number" :value="left" />
        </td>
      </tr>
      <tr>
        <td>MouseIcon</td>
        <td>
          <input type="text" :value="mouseIcon" />
        </td>
      </tr>
      <tr>
        <td>MousePointer</td>
        <td>
          <select :value="mousePointer">
            <option v-for="(item,key) in mousePointer" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Picture</td>
        <td>
          <input type="text" :value="picture" />
        </td>
      </tr>
      <tr>
        <td>PictureAlignment</td>
        <td>
          <select :value="pictureAlignment">
            <option v-for="(item,key) in pictureAlignment" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>PictureSizeMode</td>
        <td>
          <select :value="pictureSizeMode">
            <option v-for="(item,key) in pictureSizeMode" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>PictureTiling</td>
        <td>
          <select :value="PictureTiling">
            <option selected>False</option>
            <option>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>RightToLeft</td>
        <td>
          <select :value="rightToLeft">
            <option selected>False</option>
            <option>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ScrollBars</td>
        <td>
          <select :value="scrollBars">
            <option v-for="(item,key) in scrollBars" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ScrollHeight</td>
        <td>
          <input type="number" :value="scrollHeight" />
        </td>
      </tr>
      <tr>
        <td>ScrollLeft</td>
        <td>
          <input type="number" :value="scrollLeft" />
        </td>
      </tr>
      <tr>
        <td>ScrollTop</td>
        <td>
          <input type="number" :value="scrollTop" />
        </td>
      </tr>

      <tr>
        <td>ScrollWidth</td>
        <td>
          <input type="number" :value="scrollWidth" />
        </td>
      </tr>
      <tr>
        <td>ShowModal</td>
        <td>
          <select :value="showModal">
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>SpecialEffect</td>
        <td>
          <select :value="specialEffect">
            <option v-for="(item,key) in specialEffect" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>StartUpPosition</td>
        <td>
          <select :value="startUpPosition">
            <option v-for="(item,key) in startUpPosition" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Tag</td>
        <td>
          <input type="text" :value="tag" />
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input type="number" :value="top" />
        </td>
      </tr>
      <tr>
        <td>WhatsThisButton</td>
        <td>
          <select :value="whatsThisButton">
            <option selected>False</option>
            <option>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>WhatsThisHelp</td>
        <td>
          <select :value="whatsThisHelp">
            <option selected>False</option>
            <option>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Width</td>
        <td>
          <input type="number" :value="width" />
        </td>
      </tr>
      <tr>
        <td>Zoom</td>
        <td>
          <input type="number" :value="zoom" />
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
// import borderColor from "./models/borderColor.json";

export default {
  name: "userFormTable",
  props: ["userForms"],
  components: {},
  data() {
    return {
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