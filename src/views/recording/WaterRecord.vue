<template>
  <div>
    <main>
      <BaseTitle title="飲水紀錄量"></BaseTitle>
      <section class="water-record">
        <div class="card">
          <img src="" alt="" />
          <div class="record">
            <span>-</span>
            <h2 class="quantity">0 公升</h2>
            <span>+</span>
          </div>
          <div class="target">每日目標：2公升</div>
        </div>
      </section>
      <div class="button-wrapper">
        <BaseButton title="取消" buttonStyle="outline-default"></BaseButton>
        <BaseButton title="確認" buttonStyle="primary"></BaseButton>
      </div>
    </main>
  </div>
</template>

<script>
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
export default {
  components: {
    BaseTitle,
    BaseButton
  }
};
</script>

<style lang="scss" scoped>
.water-record {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-bottom: 190px;
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
    display: inline;
    margin: 0 20px;
    font-size: 24px;
    font-weight: 700;
    color: #383838;
    vertical-align: middle;
  }
  .target {
    font-size: 13px;
    color: #407d60;
  }
}

.page-title {
  margin-bottom: 100px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  .BaseButton {
    width: 143px;
    margin: 0 7px;
  }
}
</style>
