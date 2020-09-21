<template>
  <div class="button" :class="buttonClass" @click="$emit('clickHandler')">
    {{ buttonText }}
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonClass: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 30px;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
}

.button.primary {
  color: #fff;
  background-color: rgb(79, 123, 98);
}

.button.default {
  color: rgb(79, 123, 98);
  background-color: #fff;
}
</style>
