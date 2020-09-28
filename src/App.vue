<template>
  <div id="app">
    <div class="containter">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  background-color: #e5e5e5;
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
    background-color: #e5e5e5;
    margin: 0 auto;
  }
}
</style>
