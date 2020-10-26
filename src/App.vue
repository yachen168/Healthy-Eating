<template>
  <div id="app">
    <div class="containter">
      <router-view />
    </div>
    <div class="loading-area" v-show="$store.getters.getLoadingState">
      <LoadingPage></LoadingPage>
    </div>
  </div>
</template>
<script>
import LoadingPage from "@/components/common/LoadingPage";
export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    LoadingPage
  }
};
</script>

<style lang="scss">
#app {
  background-color: #f5f5f5;
  position: relative;
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
    position: relative;
    max-width: 576px;
    min-height: 100vh;
    margin: 0 auto;
  }
  .loading-area {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    background-color: black;
    opacity: 0.5;
  }
}
</style>
