<template>
  <div class="base-title">
    <h1 class="page-title">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.page-title {
  font-size: 24px;
  text-align: center;
  color: #407d60;
  font-weight: bold;
}
</style>
