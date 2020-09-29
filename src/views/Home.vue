<template>
  <div class="home">
    <Navbar>
      <div class="buttons-wrapper">
        <BaseButton
          class="button-login"
          title="登入"
          buttonStyle="transparent"
          :disabledState="true"
          @click="$router.push({ name: 'Login' })"
        ></BaseButton>
        <BaseButton
          class="button-register"
          title="開始註冊"
          buttonStyle="default"
          :disabledState="true"
          @click="$router.push({ name: 'Register' })"
        ></BaseButton>
      </div>
    </Navbar>
    <section class="banner">
      <div class="image">
        <img src="@/assets/images/img_home_1.png" alt="" />
      </div>
      <div class="banner-footer">
        <div class="button-scroll-down">
          <a-anchor :target-offset="targetOffset">
            <a-anchor-link href="#bottom" title="eeee" />
          </a-anchor>
          <img src="@/assets/images/ic_arrowdown.svg" alt="scroll-down" />
        </div>
      </div>
    </section>
    <section class="feature">
      <BaseTitle title="甲呼健康的特色"></BaseTitle>
      <div class="feature-content">
        <div class="anchor" id="bottom"></div>
        <div class="image">
          <img src="@/assets/images/img_home_2.png" alt="" />
        </div>
        <div class="image">
          <img src="@/assets/images/img_home_3.png" alt="" />
        </div>
      </div>
      <BaseButton
        class="button-start-register"
        title="開始註冊使用"
        buttonStyle="primary"
        :disabledState="true"
        @click="$router.push({ name: 'Register' })"
      ></BaseButton>
    </section>
    <div class="anchor" id="bottom"></div>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import BaseTitle from "@/components/common/BaseTitle";
import BaseButton from "@/components/common/BaseButton";
export default {
  name: "Home",
  components: {
    Navbar,
    BaseTitle,
    BaseButton
  },
  data() {
    return {
      targetOffset: null
    };
  },
  mounted() {
    this.targetOffset = window.innerHeight / 4; // 自定義錨點滾到視窗正中央
  }
};
</script>

<style lang="scss" scoped>
.buttons-wrapper {
  display: flex;
  .BaseButton {
    font-weight: 400;
    font-size: 18px;
  }
  .button-register {
    width: 100px;
    margin-left: 16px;
  }
}
.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 92vh;
  min-height: 480px;
  background-color: rgb(245, 245, 245);
  .image {
    width: 210px;
    margin: 0 auto 90px;
    img {
      width: 100%;
    }
  }
  .banner-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    .button-scroll-down {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 76px;
      height: 76px;
      right: 0;
      left: 0;
      margin: 0 auto;
      border-radius: 50%;
      background-color: #fff;
      transform: translateY(-50%);
      cursor: pointer;
    }
    i {
      font-size: 55px;
      line-height: 0;
    }
  }
}
.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 0 60px;
  background-color: #fff;
  .base-title {
    margin-bottom: 65px;
  }
  .image {
    width: 60%;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .image + .image {
    margin-top: 43px;
  }
}

::v-deep .ant-anchor-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  .ant-anchor-link-title {
    display: block;
    height: 76px;
    width: 76px;
  }
  .ant-anchor-link {
    padding: 0;
    border-radius: 50%;
  }
}

.button-start-register {
  width: 160px;
  margin-top: 105px;
  font-size: 18px;
}
</style>
