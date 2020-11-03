<template>
  <div class="crop">
    <p class="title">上傳編輯圖片</p>
    <VueCropper
      autoCrop
      :outputSize="1"
      :outputType="'png'"
      :img="blob"
      :autoCropWidth="260"
      :autoCropHeight="260"
      :fixedBox="true"
      :high="true"
      :info="false"
      :mode="'100%'"
      :maxImgSize="360"
      :canMoveBox="false"
      :fixed="false"
      ref="cropper"
    ></VueCropper>
    <div class="upload-avatar-footer">
      <BaseButton
        title="取消"
        class="login-button"
        buttonStyle="outline-default"
        @click="$emit('cancelCrop')"
      ></BaseButton>
      <BaseButton
        title="上傳大頭貼"
        buttonStyle="primary"
        @click="$emit('updateAvatar')"
      ></BaseButton>
    </div>
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
  async created() {
    const blob_url = URL.createObjectURL(this.imgURL);
    this.blob = blob_url;
  },
  data() {
    return {
      blob: ""
    };
  },
  props: {
    imgURL: {
      type: File,
      required: true
    }
  },
  methods: {
    updateAvatar(data) {
      this.$refs.cropper.getCropBlob(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.crop {
  height: 360px;
}

.title {
  color: #407d60;
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-top: 31px;
  margin-bottom: 36px;
}

.upload-avatar-footer {
  display: flex;
  margin: 61px 28px 0;
  .BaseButton {
    flex: 1 0 0;
  }
  .BaseButton + .BaseButton {
    margin-left: 14px;
  }
}

::v-deep .cropper-crop-box {
  border-radius: 50%;
  overflow: hidden;
}
</style>
