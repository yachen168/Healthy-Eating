<template>
  <div>
    <b-table stacked small :fields="fields" :items="items" responsive="sm">
      <template v-slot:cell()="data">
        <div class="recording">
          <MinusIcon
            v-if="canBeModified"
            class="icon"
            :class="{ disabled: data.value === min }"
            @click="updateQuantity(data, -1)"
          />
          <span class="quantity">{{
            data.value > min
              ? data.field.key === "water"
                ? data.value.toFixed(2)
                : data.value.toFixed(1)
              : data.value
          }}</span>
          <AddIcon
            v-if="canBeModified"
            class="icon"
            :class="{ disabled: data.value === max }"
            @click="updateQuantity(data, 1)"
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
        <div
          class="info"
          v-b-modal.modal-scrollable
          @click="$emit('showModal', data.field)"
        >
          <InfoIcon class="icon" /><span>份量說明</span>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import MinusIcon from "@/assets/images/button_sub_abled.svg?inline";
import AddIcon from "@/assets/images/button_add_abled.svg?inline";
import InfoIcon from "@/assets/images/ic_info.svg?inline";

export default {
  components: {
    MinusIcon,
    AddIcon,
    InfoIcon
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    canBeModified: {
      type: Boolean,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateQuantity(data, positiveOrNagtive) {
      let sum = data.item[data.field.key];
      if (sum === 0 && positiveOrNagtive < 0) return;
      if (sum === 10 && positiveOrNagtive > 0) return;

      if (data.field.key !== "water") {
        this.$emit("update:quantity", {
          data,
          addAndSubtractRange: 0.5 * positiveOrNagtive
        });
      } else {
        this.$emit("update:quantity", {
          data,
          addAndSubtractRange: 0.25 * positiveOrNagtive
        });
      }
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
    padding: 0 0 25px 45px;
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    color: #383838;
    background-position: 0 40%;
    background-size: 38px;
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
  > [data-label]:nth-of-type(7)::before {
    background-image: url("~@/assets/images/settingfood_ic_water.svg");
  }
}

.recording {
  user-select: none;
  text-align: right;
  color: #383838;
  font-weight: 700;
  .icon.disabled {
    color: #a8a8a8;
    cursor: not-allowed;
    rect {
      fill: currentColor;
    }
    circle {
      stroke: currentColor;
    }
  }
  .icon {
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
  position: absolute;
  bottom: 15px;
  left: 45px;
  color: #407d60;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  .icon {
    margin-right: 3px;
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
}
</style>
