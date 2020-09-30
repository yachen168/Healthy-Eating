<template>
  <div>
    <b-table stacked small :fields="fields" :items="items" responsive="sm">
      <template v-slot:cell()="data">
        <div class="recording">
          <img
            v-if="data.value > 0"
            @click="$emit('update:quantity', data, -0.5)"
            src="@/assets/images/button_sub_abled.svg"
            alt="minus"
          />
          <img
            v-else
            src="@/assets/images/button_sub_disabled.svg"
            alt="minus-not-allowed"
          />
          <span class="quantity">{{
            data.value ? data.value.toFixed(1) : data.value
          }}</span>
          <img
            v-if="data.value < 10"
            @click="$emit('update:quantity', data, 0.5)"
            src="@/assets/images/button_add_abled.svg"
            alt="add"
          />
          <img
            v-else
            src="@/assets/images/button_add_disabled.svg"
            alt="add-not-allowed"
          />
          <!-- 奶品類的單位：杯，水的單位：公升，其餘的單位：份 -->
          <span class="unit">{{
            data.field.key === "dairy"
              ? "杯"
              : data.field.key === "water"
              ? "公升"
              : "份"
          }}</span>
        </div>
        <span class="info"
          ><b-icon icon="info-circle" aria-hidden="true"></b-icon>份量說明</span
        >
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.table {
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 0;
}

::v-deep .table td {
  position: relative;
  border-top: none;
  background: linear-gradient(
      to right,
      #9cc2b0 12.5%,
      transparent 12.5% 25%,
      #9cc2b0 25% 37.5%,
      transparent 37.5% 50%,
      #9cc2b0 50% 62.5%,
      transparent 62.5% 75%,
      #9cc2b0 75% 87.5%,
      transparent 87.5% 100%
    )
    repeat-x top;
  background-size: 45px 1px;
  padding: 16px 0 13px;
  color: #383838;
}

::v-deep .table.b-table.b-table-stacked > tbody > tr {
  padding: 0 10px;
  > :first-child {
    background: none;
  }
  > [data-label] > div {
    width: 40%;
    height: 30px;
    margin-top: 8px;
    padding: 0;
  }
  > [data-label]::before {
    width: 60%;
    text-align: left;
    padding: 0 0 25px 50px;
    background-position: 0 50%;
    background-repeat: no-repeat;
  }
  > [data-label]:first-of-type::before {
    background-image: url("~@/assets/images/ic_malt.svg");
  }
  > [data-label]:nth-of-type(2)::before {
    background-image: url("~@/assets/images/ic_meat.svg");
  }
  > [data-label]:nth-of-type(3)::before {
    background-image: url("~@/assets/images/ic_milk.svg");
  }
  > [data-label]:nth-of-type(4)::before {
    background-image: url("~@/assets/images/ic_veg.svg");
  }
  > [data-label]:nth-of-type(5)::before {
    background-image: url("~@/assets/images/ic_fruit.svg");
  }
  > [data-label]:nth-of-type(6)::before {
    background-image: url("~@/assets/images/ic_oil.svg");
  }
}

.recording {
  user-select: none;
  text-align: right;
  color: #383838;
  font-weight: 700;
  svg {
    cursor: pointer;
  }
  .total {
    min-width: 32px;
    margin: 0 4px;
    font-size: 13px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-weight: 700;
    background-color: #f5f5f5;
    border-radius: 2px;
  }
  .quantity {
    display: inline-block;
    text-align: center;
    margin: 0 4px;
    min-width: 32px;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    background-color: #f5f5f5;
  }
  .unit {
    font-size: 14px;
    margin-left: 10px;
  }
}

.info {
  color: #407d60;
  position: absolute;
  bottom: 15px;
  left: 50px;
  font-size: 14px;
  cursor: pointer;
  svg {
    margin-right: 3px;
  }
}
</style>
