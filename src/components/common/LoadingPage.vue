<template>
  <div class="loading-page text-center">
    <b-spinner label="Loading..."></b-spinner>
  </div>
</template>

<script>
export default {
  name: "LoadingPage"
};
</script>

<style lang="scss" scoped>
.spinner-border {
  width: 3rem;
  height: 3rem;
  color: #9cc2b0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
</style>
