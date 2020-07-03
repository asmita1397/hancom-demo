<template>
  <table class="table">
    <caption class="caption">Properties</caption>
    <tr>
      <th v-bind="autoSize" :key="textBoxes.autoSize">AutoSize</th>
      <td>
        <input type="text" v-model="textBoxes.autoSize.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="autoTab" :key="textBoxes.autoTab">AutoTab</th>
      <td>
        <input type="text" v-model="textBoxes.autoTab.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="autoWordSelect" :key="textBoxes.autoWordSelect">AutoWordSelect</th>
      <td>
        <input type="text" v-model="textBoxes.autoWordSelect.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="backColor" :key="textBoxes.backColor">BackColor</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="backStyle" :key="textBoxes.backStyle">BackStyle</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="borderColor" :key="textBoxes.borderColor">BorderColor</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="borderStyle" :key="textBoxes.borderStyle">BorderStyle</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="controlSource" :key="textBoxes.controlSource">ControlSource</th>
      <td>
        <input type="text" v-model="textBoxes.controlSource.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="controlTipText" :key="textBoxes.controlTipText">ControlTipText</th>
      <td>
        <input type="text" v-model="textBoxes.controlTipText.value" />
      </td>
    </tr>

    <tr>
      <th v-bind="dragBehavior" :key="textBoxes.dragBehavior">DragBehavior</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="enabled" :key="textBoxes.enabled">Enabled</th>
      <td>
        <select>
          <option></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="enterFieldBehavior" :key="textBoxes.enterFieldBehavior">EnterFieldBehavior</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="enterKeyBehavior" :key="textBoxes.enterKeyBehavior">EnterKeyBehavior</th>
      <td>
        <input type="text" v-model="textBoxes.enterKeyBehavior.value" />
      </td>
    </tr>

    <tr>
      <th v-bind="font" :key="textBoxes.font">Font</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="foreColor" :key="textBoxes.foreColor">ForeColor</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="height" :key="textBoxes.height">Height</th>
      <td>
        <input type="text" v-model="textBoxes.height.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="helpContextId" :key="textBoxes.helpContextId">HelpContextId</th>
      <td>
        <input type="text" v-model="textBoxes.helpContextId.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="hideSelection" :key="textBoxes.hideSelection">HideSelection</th>
      <td>
        <input type="text" v-model="textBoxes.hideSelection.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="iMEMode" :key="textBoxes.iMEMode">IMEMode</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="integralHeight" :key="textBoxes.integralHeight">IntegralHeight</th>
      <td>
        <input type="text" v-model="textBoxes.integralHeight.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="left" :key="textBoxes.left">Left</th>
      <td>
        <input type="text" v-model="textBoxes.left.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="locked" :key="textBoxes.locked">Locked</th>
      <td>
        <input type="text" v-model="textBoxes.locked.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="maxLength" :key="textBoxes.maxLength">MaxLength</th>
      <td>
        <input type="text" v-model="textBoxes.maxLength.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="mouseIcon" :key="textBoxes.mouseIcon">MouseIcon</th>
      <td>
        <input type="text" v-model="textBoxes.mouseIcon.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="mousePointer" :key="textBoxes.mousePointer">MousePointer</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="multiLine" :key="textBoxes.multiLine">MultiLine</th>
      <td>
        <input type="text" v-model="textBoxes.multiLine.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="passwordChar" :key="textBoxes.passwordChar">PasswordChar</th>
      <td>
        <input type="text" v-model="textBoxes.passwordChar.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="scrollBars" :key="textBoxes.scrollBars">ScrollBars</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="selectionMargin" :key="textBoxes.selectionMargin">SelectionMargin</th>
      <td>
        <input type="text" v-model="textBoxes.selectionMargin.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="specialEffect" :key="textBoxes.specialEffect">SpecialEffect</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="tabIndex" :key="textBoxes.tabIndex">TabIndex</th>
      <td>
        <input type="text" v-model="textBoxes.tabIndex.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="tabKeyBehavior" :key="textBoxes.tabKeyBehavior">TabKeyBehavior</th>
      <td>
        <input type="text" v-model="textBoxes.tabKeyBehavior.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="tabStop" :key="textBoxes.tabStop">TabStop</th>
      <td>
        <input type="text" v-model="textBoxes.tabStop.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="tag" :key="textBoxes.tag">Tag</th>
      <td>
        <input type="text" v-model="textBoxes.tag.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="text" :key="textBoxes.text">Text</th>
      <td>
        <input type="text" v-model="textBoxes.text.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="textAlign" :key="textBoxes.textAlign">TextAlign</th>
      <td>
        <select>
          <option v-for="(value,key) in textBoxes" v-bind:value="value" :key="key"></option>
        </select>
      </td>
    </tr>
    <tr>
      <th v-bind="top" :key="textBoxes.top">Top</th>
      <td>
        <input type="text" v-model="textBoxes.top.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="visible" :key="textBoxes.visible">Visible</th>
      <td>
        <input type="text" v-model="textBoxes.visible.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="width" :key="textBoxes.width">Width</th>
      <td>
        <input type="text" v-model="textBoxes.width.value" />
      </td>
    </tr>
    <tr>
      <th v-bind="wordWrap" :key="textBoxes.wordWrap">WordWrap</th>
      <td>
        <input type="text" v-model="textBoxes.wordWrap.value" />
      </td>
    </tr>
  </table>
</template>

<script>
export default {};
</script>

<style>
</style>