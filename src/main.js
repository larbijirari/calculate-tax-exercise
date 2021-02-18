import Vue from "vue";
import App from "./App.vue";
import "bulma/css/bulma.css";
import "animate.css";

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import fr from "vee-validate/dist/locale/fr.json";
import * as rules from "vee-validate/dist/rules";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(far);
Vue.component("font-awesome-icon", FontAwesomeIcon);
dom.watch();
// CONFIG VEE VALIDATE

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
localize("fr", fr);
// Install components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
//

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
