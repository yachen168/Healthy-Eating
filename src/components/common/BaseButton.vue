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
  width: 296px;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}

/* primary: 白字綠底 */
.button.primary {
  color: #fff;
  background-color: rgb(79, 123, 98);
}

/* default: 綠字白底 */
.button.default {
  color: rgb(79, 123, 98);
  background-color: #fff;
}

/* info: 白字藍底 */
.button.info {
  color: #fff;
  background-color: #4b7cc7;
}

/* danger: 白字紅底 */
.button.danger {
  color: #fff;
  background-color: #e36e6e;
}

/* danger: 白字透明底 */
.button.transparent {
  color: #fff;
}
</style>
