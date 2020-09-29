<template>
  <div>
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
  margin-top: 31px;
  margin-bottom: 60px;
  font-size: 24px;
  text-align: center;
  color: #407d60;
}
</style>
