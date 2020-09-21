<template>
  <div class="home">
    <Navbar>
      <div class="buttons-wrapper" slot="right">
        <Button
          class="button-login"
          buttonText="登入"
          buttonClass="transparent"
          @clickHandler="$router.push({ name: 'Login' })"
        ></Button>
        <Button
          buttonText="開始註冊"
          style="width: 100px;fontSize: 18px"
          buttonClass="default"
          @clickHandler="$router.push({ name: 'Register' })"
        ></Button>
      </div>
    </Navbar>
    <section class="banner">
      <div class="image">
        <img src="https://i.imgur.com/1gGigaq.png" alt="" />
      </div>
      <div class="banner-footer">
        <div class="button-scroll-down">
          <a-anchor :target-offset="targetOffset">
            <a-anchor-link href="#bottom" title="eeee" />
          </a-anchor>
          <a-icon type="down-circle" />
        </div>
      </div>
    </section>
    <section class="feature">
      <Title title="甲呼健康的特色"></Title>
      <div class="feature-content">
        <div class="anchor" id="bottom"></div>
        <div class="image">
          <img src="https://i.imgur.com/OSJyIeQ.png" alt="" />
        </div>
        <div class="image">
          <img src="https://i.imgur.com/UMeQSLh.png" alt="" />
        </div>
      </div>
      <Button
        buttonText="開始註冊使用"
        style="width: 160px;fontSize: 18px"
        buttonClass="primary"
        @clickHandler="$router.push({ name: 'Login' })"
      ></Button>
    </section>
    <div class="anchor" id="bottom"></div>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import Title from "@/components/common/BaseTitle";
import Button from "@/components/common/BaseButton";
export default {
  name: "Home",
  components: {
    Navbar,
    Title,
    Button
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
  padding: 40px 0 60px;
  &-content {
    margin-bottom: 50px;
  }
  .image {
    width: 60%;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .image + .image {
    margin-top: 30px;
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

.button-login {
  width: fit-content;
  font-size: 18px;
  margin-right: 16px;
}
</style>
