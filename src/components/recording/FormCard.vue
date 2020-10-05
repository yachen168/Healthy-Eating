<template>
  <div class="form-card">
    <slot name="image"></slot>
    <div class="record">
      <MinusIcon
        class="icon"
        @click="$emit('minus:quantity')"
        :class="{ disabled: quantity === 0 }"
      />
      <h2 class="quantity">{{ quantity }} {{ unit }}</h2>
      <AddIcon class="icon" @click="$emit('add:quantity')" />
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
import MinusIcon from "@/assets/images/button_sub_abled.svg?inline";
import AddIcon from "@/assets/images/button_add_abled.svg?inline";

export default {
  components: {
    MinusIcon,
    AddIcon
  },
  props: {
    quantity: {
      type: [Number, String],
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.form-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 160px;
  border-radius: 6px;
  margin-bottom: 190px;
  margin-top: 117px;
  background-color: #fff;
  border-radius: 6px;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 296px;
    height: 160px;
    background-color: #fff;
  }
  .quantity {
    display: inline-block;
    min-width: 120px;
    margin: 0 20px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: #383838;
    vertical-align: middle;
  }
  .icon {
    cursor: pointer;
  }
  .icon.disabled {
    color: #a8a8a8;
    pointer-events: none;
    rect {
      fill: currentColor;
    }
    circle {
      stroke: currentColor;
    }
  }
}
</style>
