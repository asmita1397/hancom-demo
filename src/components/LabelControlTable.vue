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
        <input type="text" :value="name">
      </td>
    </tr>
    <tr>
      <td>Accelerator</td>
      <td>
        <input type="text" :value="accelerator"/>
      </td>
    </tr>
    <tr>
      <td>AutoSize</td>
      <td>
        <select :value="autosize">
         <option selected>False</option>
            <option>True</option>
        </select>
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
      <td>BackStyle</td>
      <select :value="backStyle">
            <option v-for="(item,key) in backStyle" :key="key" :value="item">{{key}}</option>
          </select>
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
      <td>ControlTipText</td>
      <td>
        <input type="text" :value="controlTipText" />
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
        <select>
          <option v-for="(value,key) in font" v-bind:value="value" :key="key">{{key}}</option>
        </select>
      </td>
    </tr>
    <tr>
      <td>ForeColor</td>
      <td>
        <select>
          <option v-for="(value,key) in foreColor" v-bind:value="value" :key="key">{{key}}</option>
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
        <select>
          <option v-for="(value,key) in mousePointer" v-bind:value="value" :key="key">{{key}}</option>
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
      <td>PicturePosition</td>
      <td>
        <select>
          <option v-for="(value,key) in picturePosition" v-bind:value="value" :key="key">{{key}}</option>
        </select>
      </td>
    </tr>
    <tr>
      <td>SpecialEffect</td>
      <td>
        <select>
          <option v-for="(value,key) in specialEffect" v-bind:value="value" :key="key">{{key}}</option>
        </select>
      </td>
    </tr>
    <tr>
      <td>TabIndex</td>
      <td>
        <input type="number" :value="tabIndex" />
      </td>
    </tr>
    <tr>
      <td>TabStop</td>
      <td>
        <select :value="tabStop">
         <option selected>False</option>
            <option>True</option>
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
      <td>TextAlign</td>
      <td>
        <select>
          <option v-for="(value,key) in textAlign" v-bind:value="value" :key="key">{{key}}</option>
        </select>
      </td>
    </tr>
    <tr>
      <td>Top</td>
      <td>
        <input type="number" :value="top" />
      </td>
    </tr>
    <tr>
      <td>Visible</td>
      <td>
      <select :value="visible">
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
      <td>WordWrap</td>
      <td>
        <input type="text" :value="wordWrap" />
      </td>
    </tr>
  </table>
</div>
</template>

<script>
import backColor from "./models/backColor.json";
import backStyle from "./models/backStyle.json";
import borderColor from "./models/borderColor.json";
import borderStyle from "./models/borderStyle.json";
import font from "./models/font.json";
import foreColor from "./models/foreColor.json";
import mousePointer from "./models/mousePointer.json";
import picturePosition from "./models/picturePosition.json";
import specialEffect from "./models/specialEffect.json";
import textAlign from "./models/textAlign.json";

export default {

   data() {
    return {
      backColor:backColor,
      // root: userForms,
      backStyle:backStyle,
      borderColor:borderColor,
      borderStyle:borderStyle,
      // cycle:cycle,
      font:font,
      foreColor:foreColor,
      // keepScrollsBarsVisible:keepScrollsBarsVisible,
      mousePointer:mousePointer,
      picturePosition:picturePosition,
      // pictureAlignment:pictureAlignment,
      // scrollBars:scrollBars,
      specialEffect:specialEffect,
      // startUpPosition:startUpPosition
      textAlign:textAlign
      
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
  color: black;
}
th,
td {
  text-align: left;
  font-size: 11px;
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