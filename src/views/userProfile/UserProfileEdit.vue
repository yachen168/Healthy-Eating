<template>
  <main>
    <div class="avatar-wrapper">
      <div class="avatar">
        <b-avatar :src="$store.getters.avatarUrl" size="130"></b-avatar>
        <b-form-file accept=".png"></b-form-file>
      </div>
      <CameraIcon class="icon" />
    </div>
    <form @submit.prevent>
      <ValidationObserver v-slot="{ invalid }">
        <label for="user-name" class="label-title">用戶暱稱</label>
        <ValidationProvider
          rules="required|nameMinMax:1,10"
          v-slot="{ errors }"
        >
          <b-form-input
            id="user-name"
            class="form-input"
            type="text"
            :placeholder="$store.getters.userProfile.name"
            :state="errors[0] ? false : null"
            :value="$store.getters.userProfile.name"
            @input="
              $store.commit('userProfile', {
                ...$store.getters.userProfile,
                name: $event
              })
            "
          ></b-form-input>
          <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
            {{ errors[0] }}
          </p>
        </ValidationProvider>
        <label for="gender" class="label-title">性別</label>
        <div class="button-wrapper">
          <input
            id="gender"
            class="form-input"
            type="button"
            :value="
              $store.getters.userProfile.gender
                ? $store.getters.gender
                : '未選擇'
            "
            v-b-modal.modal-gender
          />
          <ArrowDownIcon class="icon" />
          <b-modal id="modal-gender" centered hide-footer hide-header>
            <div class="radio-wrapper">
              <span>男</span>
              <b-form-radio
                v-model="$store.getters.userProfile.gender"
                value="male"
                @change="
                  $store.commit('userProfile', {
                    ...$store.getters.userProfile,
                    gender: $event
                  })
                "
              ></b-form-radio>
            </div>
            <div class="radio-wrapper">
              <span>女</span>
              <b-form-radio
                v-model="$store.getters.userProfile.gender"
                value="female"
                @change="
                  $store.commit('userProfile', {
                    ...$store.getters.userProfile,
                    gender: $event
                  })
                "
              ></b-form-radio>
            </div>
            <div class="radio-wrapper">
              <span>其他</span>
              <b-form-radio
                v-model="$store.getters.userProfile.gender"
                value="others"
                @change="
                  $store.commit('userProfile', {
                    ...$store.getters.userProfile,
                    gender: $event
                  })
                "
              ></b-form-radio>
            </div>
          </b-modal>
        </div>
        <label for="datepicker-placeholder" class="label-title">生日</label>
        <b-form-input
          id="birthday"
          class="form-input birthday-input"
          type="date"
          placeholder=""
          :value="$store.getters.userProfile.birthday"
          @input="
            $store.commit('userProfile', {
              ...$store.getters.userProfile,
              birthday: $event
            })
          "
        ></b-form-input>
        <label for="height" class="label-title">身高</label>
        <ValidationProvider
          :rules="{ required: true, regex: /^[1-9]{1}\d{0,2}(\.\d?)?$/ }"
          v-slot="{ errors }"
        >
          <b-input-group>
            <b-form-input
              id="height"
              class="form-input height-input"
              type="number"
              min="0"
              :state="errors[0] ? false : null"
              placeholder="未填寫"
              :value="$store.getters.userProfile.height"
              @input="
                $store.commit('userProfile', {
                  ...$store.getters.userProfile,
                  height: $event
                })
              "
            ></b-form-input>
            <b-input-group-prepend>
              <span>公分/cm</span>
            </b-input-group-prepend>
          </b-input-group>
          <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
            {{ errors[0] }}
          </p>
        </ValidationProvider>

        <label for="weight" class="label-title">目前體重</label>
        <ValidationProvider
          :rules="{ required: true, regex: /^[1-9]{1}\d{0,2}(\.\d)?$/ }"
          v-slot="{ errors }"
        >
          <b-input-group>
            <b-form-input
              id="weight"
              class="form-input weight-input"
              type="number"
              min="0"
              :state="errors[0] ? false : null"
              :value="$store.getters.userProfile.weight"
              @input="
                $store.commit('userProfile', {
                  ...$store.getters.userProfile,
                  weight: $event
                })
              "
            ></b-form-input>
            <b-input-group-prepend>
              <span>公斤/kg</span>
            </b-input-group-prepend>
          </b-input-group>
          <p :class="{ 'font-error': errors[0] }" v-show="errors[0]">
            {{ errors[0] }}
          </p>
        </ValidationProvider>
        <div class="form-footer">
          <BaseButton
            title="取消"
            class="login-button"
            buttonStyle="outline-default"
            @click="$router.push({ name: 'UserProfileView' })"
          ></BaseButton>
          <BaseButton
            title="更新"
            class="login-button"
            buttonStyle="primary"
            :disabledState="invalid"
            @click="updateProfile"
          ></BaseButton>
        </div>
      </ValidationObserver>
    </form>
  </main>
</template>

<script>
import BaseButton from "@/components/common/BaseButton";
import ArrowDownIcon from "@/assets/images/mdi_arrow_down.svg?inline";
import CameraIcon from "@/assets/images/ic_camera.svg?inline";
export default {
  components: {
    BaseButton,
    ArrowDownIcon,
    CameraIcon
  },
  data() {
    return {
      // ======== API 資料格式 =========
      // userProfile: this.$store.getters.userProfile
    };
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("postUserWeight", {
        weight: this.$store.getters.userProfile.weight
      });
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  padding: 31px 32px 20px;
}
.avatar-wrapper {
  position: relative;
  width: fit-content;
  margin: 0 auto 20px;
  .icon {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .avatar {
    width: 130px;
    height: 130px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }
}

::v-deep .custom-file-label {
  height: 100%;
  border-radius: 50%;
  overflow-x: visible;
  opacity: 0;
  &::after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
::v-deep .custom-file {
  position: absolute;
  height: 100%;
  left: 0;
}

.birthday-input {
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 100%;
    right: 0;
    background-color: #fff;
    background-image: url("~@/assets/images/ic_birth.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    pointer-events: none;
  }
}

.input-group-prepend {
  position: absolute;
  right: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 40px;
  color: #407d60;
}

.input-group > .form-control:not(:last-child) {
  border-radius: 6px;
}

.button-wrapper {
  position: relative;
  input {
    width: 100%;
    padding: 0 8px;
    height: 40px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #9cc2b0;
    border-radius: 6px;
    outline: none;
    vertical-align: top;
  }
  .icon {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.form-footer {
  display: flex;
  margin-top: 20px;
  .BaseButton {
    flex: 1 0 0;
  }
  .BaseButton + .BaseButton {
    margin-left: 14px;
  }
}

// ===== form-radior =====
.radio-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 15px;
  .custom-control {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: right;
    input {
      width: 100%;
    }
  }
}

.radio-wrapper + .radio-wrapper {
  border-top: 1px solid rgba(33, 33, 33, 0.08);
}

::v-deep .is-invalid {
  background-image: none;
}

::v-deep input[type="radio"] {
  width: 100%;
  height: 100%;
}

::v-deep .custom-control-label {
  height: 100%;
}

::v-deep .custom-control-label::before {
  display: none;
}

::v-deep .custom-control-label::after {
  width: 17px;
  height: 17px;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin: auto 0;
  border: 2px solid #383838;
  border-radius: 50%;
}

::v-deep .custom-control-input:checked ~ .custom-control-label::after {
  background-color: transparent;
  border: none;
}

::v-deep
  .custom-radio
  .custom-control-input:checked
  ~ .custom-control-label::after {
  background-image: url("~@/assets/images/ic_radiobutton_on.svg");
  background-size: 20px;
  border: none;
}

.font-error {
  color: #e36e6e;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  margin-top: 5px;
}
</style>

<style>
.modal-content {
  width: 296px;
  margin: 0 auto;
}
.modal-body {
  padding: 0;
}
</style>
