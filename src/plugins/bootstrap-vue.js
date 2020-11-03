import Vue from "vue";
import {
  // ButtonPlugin,
  FormInputPlugin,
  TablePlugin,
  BootstrapVueIcons,
  NavbarPlugin,
  SidebarPlugin,
  AvatarPlugin,
  LayoutPlugin,
  AlertPlugin,
  ModalPlugin,
  BFormFile,
  InputGroupPlugin,
  FormRadioPlugin,
  SpinnerPlugin
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.use(ButtonPlugin);
Vue.use(FormInputPlugin);
Vue.use(TablePlugin);
Vue.use(NavbarPlugin);
Vue.use(SidebarPlugin);
Vue.use(AvatarPlugin);
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(AlertPlugin);
Vue.use(InputGroupPlugin);
Vue.use(FormRadioPlugin);
Vue.use(SpinnerPlugin);
Vue.component("b-form-file", BFormFile);
