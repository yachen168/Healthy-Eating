<template>
  <div id="app">
    <div class="containter">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  background-color: #f5f5f5;
  &::before {
    content: "";
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 64px;
    background-color: #407d60;
  }
  .containter {
    max-width: 576px;
    min-height: 100vh;
    margin: 0 auto;
  }
}
</style>
