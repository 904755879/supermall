<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'Tabbar'
}
</script>

<style>
#tab-bar{
    background-color: pink;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 2px rgba(100, 200, 300, 0.4);
    display: flex;
    
}

</style>