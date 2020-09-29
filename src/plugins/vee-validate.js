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
extend("alpha_num", alpha_num);

extend("minmax", {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ["min", "max"]
});

localize("zh_TW", TW);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
