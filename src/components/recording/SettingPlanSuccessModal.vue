<template>
  <div class="setting-plan-success">
    <Navbar />
    <main>
      <div>
        <SettingSuccessIcon />
        <h1 class="title">設定完成，按下開始記錄<br />就可以記錄體重營養囉</h1>
        <h2 class="sub-title">（按下開始記錄後無法更改一日營養規劃）</h2>
      </div>
    </main>
    <footer class="button-wrapper">
      <BaseButton
        title="回去修改"
        buttonStyle="outline-default"
        @click="$emit('closeSettingSuccessModal')"
      ></BaseButton>
      <BaseButton
        title="開始記錄"
        buttonStyle="primary"
        @click="$router.push({ name: 'RecordingStates' })"
      ></BaseButton>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import BaseButton from "@/components/common/BaseButton";
import SettingSuccessIcon from "@/assets/images/img_settingsuccess.svg?inline";
export default {
  components: {
    Navbar,
    BaseButton,
    SettingSuccessIcon
  }
};
</script>

<style lang="scss" scoped>
.setting-plan-success {
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-color: #f5f5f5;
  padding: 0 30px 42px;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0 164px;
  text-align: center;
  color: #407d60;
  .title {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
  .sub-title {
    font-size: 14px;
    color: #407d60;
    line-height: 24px;
  }
}
.button-wrapper {
  display: flex;
  justify-content: center;
  .BaseButton {
    flex: 1 0 0;
  }
  .BaseButton + .BaseButton {
    margin-left: 7px;
  }
}
</style>
