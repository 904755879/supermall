<template>
  <div class="tab-control">
    <div
      v-for="(item ,index) in titles"
      class="tabcontrol-item"
      :class="{active : index === currentIndex}"
      @click="itemclick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
      
    },
    
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
 
}
.tabcontrol-item {
  flex: 1;
}
.tabcontrol-item span {
  padding: 10px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>