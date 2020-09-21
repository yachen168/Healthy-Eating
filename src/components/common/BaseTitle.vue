<template>
  <h1 class="page-title">
    {{ title }}
  </h1>
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
  margin-bottom: 60px;
  font-size: 24px;
  color: rgb(79, 123, 98);
}
</style>
