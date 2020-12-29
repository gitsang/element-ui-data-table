// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Element from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import axios from "axios";
import qs from "qs";
axios.defaults.paramsSerializer = params => {
  return qs.stringify(params, { arrayFormat: "repeat" });
};
// configure language
locale.use(lang);
Vue.use(Element);
Vue.config.productionTip = false;

/* eslint-disable nu cris e*/
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
