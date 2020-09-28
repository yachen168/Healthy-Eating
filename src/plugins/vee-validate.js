import Vue from "vue";
import { ValidationProvider, extend, localize, configure } from "vee-validate";
import { email } from "vee-validate/dist/rules";

import TW from "vee-validate/dist/locale/zh_TW.json";

// extend("secret", {
//   validate: value => value === "example",
//   message: "This is not the magic word"
// });
extend("email", email, {
  message: "This is not the magic word"
});

configure({
  classes: {
    valid: "valid",
    invalid: "invalid"
  }
});

localize("zh_TW", TW);

Vue.component("ValidationProvider", ValidationProvider);
