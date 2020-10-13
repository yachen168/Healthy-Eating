<template>
  <div>
    <Navbar @click="$router.push({ name: 'RecordingStates' })" />
    <main>
      <BaseTitle title="找不到該頁面"></BaseTitle>
      <section class="content">
        <NotFoundIcon />
        <p class="message">不好意思，找不到該頁面 請回到上一頁或是首頁</p>
        <BaseButton
          title="回首頁"
          buttonStyle="primary"
          @click="$router.push({ name: 'RecordingStates' })"
        />
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
import NotFoundIcon from "@/assets/images/img_unfound.svg?inline";

export default {
  components: {
    Navbar,
    BaseTitle,
    BaseButton,
    NotFoundIcon
  }
};
</script>

<style lang="scss" scoped>
main {
  padding: 31px 32px 42px;
  .content {
    margin-top: 60px;
    text-align: center;
  }
  .message {
    width: 200px;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 700;
    color: #407d60;
  }
  .BaseButton {
    position: absolute;
    bottom: 42px;
    width: 296px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>
