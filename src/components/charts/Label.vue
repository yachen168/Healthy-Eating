<template>
  <div class="label" :class="[type]" @click="$emit('click')">{{ title }}</div>
</template>

<script>
export default {
  name: "ChartLabel",
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.label {
  height: 35px;
  line-height: 35px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
}

.label.grains {
  background-color: #cba368;
}

.label.proteins {
  background-color: #e97979;
}

.label.dairy {
  background-color: #ffc52f;
}

.label.vegetables {
  background-color: #98d49b;
}

.label.fruits {
  background-color: #a171b2;
}

.label.nuts {
  background-color: #83a7dd;
}
</style>
