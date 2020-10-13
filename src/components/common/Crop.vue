<template>
  <div class="crop">
    <!-- <div class="outer"> -->
    <VueCropper
      autoCrop
      centerBox
      :outputSize="option.size"
      :outputType="option.type"
      :img="option.img"
      :autoCropWidth="option.autoCropWidth"
      :autoCropHeight="option.autoCropHeight"
      :fixedBox="option.fixedBox"
      :high="option.high"
      ref="cropper"
    ></VueCropper>
    <BaseButton title="裁切" buttonStyle="primary" @click="finish"></BaseButton>
    <!-- </div> -->
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
import BaseButton from "@/components/common/BaseButton";
export default {
  components: {
    VueCropper,
    BaseButton
  },
  data() {
    return {
      option: {
        size: 1,
        type: "png",
        autoCropWidth: 260,
        autoCropHeight: 260,
        high: true,
        img: "https://shnhz.github.io/shn-ui/img/Koala.jpg",
        fixedBox: true
      }
    };
  },
  props: {
    imgURL: {
      type: String,
      required: true
    }
  },
  methods: {
    finish() {
      this.$refs.cropper.getCropBlob(data => {
        const formData = new FormData();
        const token = localStorage.getItem("token");
        formData.append("photo", data);
        formData.append("remember_token", token);
        this.$store.dispatch("uploadAvatar", formData);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.crop {
  width: 100%;
  height: 500px;
}

::v-deep .cropper-crop-box {
  border-radius: 50%;
  overflow: hidden;
}
</style>
