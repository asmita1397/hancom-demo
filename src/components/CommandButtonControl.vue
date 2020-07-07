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
          <input type="text" :value="selectedUserForm.name" />
        </td>
      </tr>
      <tr>
        <td>Accelerator</td>
        <td>
          <input type="text" :value="selectedUserForm.accelerator" />
        </td>
      </tr>
      <tr>
        <td>AutoSize</td>
        <td>
          <select v-model="selectedUserForm.autoSize">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BackColor</td>
        <td>
          <select v-model="selectedUserForm.style.backgroundColor">
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BackStyle</td>
        <select v-model="selectedUserForm.style.backgroundColor">
          <option v-for="(item,key) in backStyle" :key="key" :value="item">{{key}}</option>
        </select>
      </tr>
      <tr>
        <td>Caption</td>
        <td>
          <input type="text" v-model="selectedUserForm.caption" />
        </td>
      </tr>
      <tr>
        <td>ControlTipText</td>
        <td>
          <input type="text" v-model="selectedUserForm.title" />
        </td>
      </tr>
      <tr>
        <td>Default</td>
        <td>
          <select :value="selectedUserForm.default">
            <option selected>true</option>
            <option>false</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td>
          <select v-model="selectedUserForm.enabled">
            <option selected :value="true">True</option>
            <option :value="false">False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Font</td>
        <td>
          <select v-model="selectedUserForm.style.fontFamily">
            <option v-for="(value,key) in font" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ForeColor</td>
        <td>
          <select v-model="selectedUserForm.style.color">
            <option v-for="(value,key) in foreColor" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Height</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.style.height | sizeFilter"
            @change="validators.sizeValidateForControls($event,selectedUserForm,'height')"
            @keyup.enter="validators.sizeValidateForControls($event,selectedUserForm,'height')"
          />
        </td>
      </tr>
      <tr>
        <td>HelpContextId</td>
        <td>
          <input type="number" :value="selectedUserForm.helpContextId" />
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.style.left | sizeFilter"
            @change="validators.sizeValidateForControls($event,selectedUserForm,'left')"
            @keyup.enter="validators.sizeValidateForControls($event,selectedUserForm,'left')"
          />
        </td>
      </tr>
      <tr>
        <td>Locked</td>
        <td>
          <select :value="selectedUserForm.locked">
            <option selected>True</option>
            <option>False</option>
          </select>
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
          <select v-model="selectedUserForm.style.cursor">
            <option v-for="(value,key) in mousePointer" v-bind:value="value" :key="key">{{key}}</option>
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
        <td>PicturePosition</td>
        <td>
          <select v-model="selectedUserForm.picturePosition">
            <option v-for="(value,key) in picturePosition" v-bind:value="value" :key="key">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>TabIndex</td>
        <td>
          <input type="number" :value="selectedUserForm.tabindex" />
        </td>
      </tr>
      <tr>
        <td>TabStop</td>
        <td>
          <select v-model="selectedUserForm.tabStop">
            <option :value="false" selected>False</option>
            <option :value="true">True</option>
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
        <td>TakeFocusOnClick</td>
        <td>
          <select :value="selectedUserForm.takeFocusOnClick">
            <option selected>True</option>
            <option>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.style.top | sizeFilter"
            @change="validators.sizeValidateForControls($event,selectedUserForm,'top')"
            @keyup.enter="validators.sizeValidateForControls($event,selectedUserForm,'top')"
          />
        </td>
      </tr>
      <tr>
        <td>Visible</td>
        <td>
          <select v-model="selectedUserForm.visible">
            <option :value="false">False</option>
            <option :value="true" selected>True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Width</td>
        <td>
          <input
            type="number"
            :value="selectedUserForm.style.width | sizeFilter"
            @change="validators.sizeValidateForControls($event,selectedUserForm,'width')"
            @keyup.enter="validators.sizeValidateForControls($event,selectedUserForm,'width')"
          />
        </td>
      </tr>
      <tr>
        <td>WordWrap</td>
        <td>
          <select :v-model="selectedUserForm.wordWrap">
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import backColor from "./models/backColor.json";
import backStyle from "./models/backStyle.json";
import font from "./models/font.json";
import foreColor from "./models/foreColor.json";
import mousePointer from "./models/mousePointer.json";
import picturePosition from "./models/picturePosition.json";
import specialEffect from "./models/specialEffect.json";
import textAlign from "./models/textAlign.json";
import { validators } from "../validators/validator";

export default {
  props: ["selectedUserForm"],
  data() {
    return {
      validators: validators,
      backColor: backColor,
      backStyle: backStyle,
      font: font,
      foreColor: foreColor,
      mousePointer: mousePointer,
      picturePosition: picturePosition,
      specialEffect: specialEffect,
      textAlign: textAlign
    };
  },
  filters: {
    sizeFilter(value) {
      return parseInt(value, 10);
    }
  }
};
</script>

<style scoped>
table,
td {
  margin-right: 0%;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 11px;
  padding: none;
  color: black;
}

td {
  text-align: left;
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