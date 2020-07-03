<template>
  <div>
    <drag-selector v-model="checkedList" @change="handleDragSelectorChange" class="drag-selector">
      <drag-selector-item
        v-for="(item, index) in myDragList"
        :value="item"
        :key="index"
        class="drag-selector__item"
      >
        <template>{{ item.name }}</template>
      </drag-selector-item>
    </drag-selector>
    {{ checkedList }}
  
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      checkedList: [],
      myDragList: [
        { name: "item1" },
        { name: "item2" },
        { name: "item3" },
        { name: "item4" }
      ]
    };
  },
  methods: {
    handleDragSelectorChange(list) {
      console.log("list", list);
    }
  }
};
</script>
<style scoped>
#demo {
  width: 740px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  background: #b3e5fc;
  border-radius: 4px;
}

.drag-selector {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 20px;
}

.drag-selector__item {
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #03a9f4;
  color: white;
}

.drag-selector__item.selected {
  background-color: #ff4081;
}

.result {
  background: rgb(248, 238, 248);
}

.back {
  position: fixed;
  top: 30px;
  right: 200px;
}

.back a {
  padding: 10px 20px;
  color: white;
  border-radius: 4px;
  background-color: #ff4081;
  text-decoration: none;
}



</style>