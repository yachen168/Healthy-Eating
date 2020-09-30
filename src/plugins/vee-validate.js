import Vue from "vue";
import {
  ValidationProvider,
  extend,
  localize,
  ValidationObserver
} from "vee-validate";
import { email, alpha_num, required } from "vee-validate/dist/rules";

import TW from "vee-validate/dist/locale/zh_TW.json";

// extend("secret", {
//   validate: value => value === "example",
//   message: "This is not the magic word"
// });
extend("email", { ...email, message: "不符合帳號信箱格式" });
extend("required", { ...required, message: "必填欄位" });
extend("alpha_num", { ...alpha_num, message: "請填入英文或數字" });

extend("minmax", {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  message: "長度不符，請輸入 6 ~ 12 個英數字",
  params: ["min", "max"]
});

extend("nameMinMax", {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  message: "長度不符，請輸入 1 ~ 10 個字",
  params: ["min", "max"]
});

extend("confirmedBy", {
  params: ["target"],
  // Target here is the value of the target field
  validate(value, { target }) {
    return value === target;
  },
  // here it is its name, because we are generating a message
  message: "與輸入密碼不同"
});

localize("zh_TW", TW);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
