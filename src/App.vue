<template>
  <section class="section">
    <div id="app">
      <div class="app-logo">
        <img src="./assets/finances-publiques.png" alt="finances publiques" />
      </div>

      <div class="is-clearfix mb-3">
        <v-step-progress
          :steps="['Type', 'Détails', 'Calcul']"
          passive-color="#b5b5b5"
          active-color="#23d160"
          :passive-thickness="5"
          :active-thickness="5"
          :line-thickness="5"
          :current-step="step - 1"
          icon-class="fa fa-check"
        ></v-step-progress>
      </div>
      <v-loading :active.sync="isLoading" is-full-page />
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in"
        tag="div"
      >
        <v-type-of-company
          v-if="step === 1"
          :supported-companies="supportedCompanies"
          :company-data="company"
          @next="
            company = $event;
            step++;
          "
          key="1"
        ></v-type-of-company>
        <v-form
          v-if="step === 2"
          :company-data="company"
          @next="
            company = $event;
            step++;
          "
          @previous="
            company = $event;
            step--;
          "
          key="2"
        ></v-form>
        <v-calculate-tax
          :company-data="company"
          v-if="step === 3"
          @previous="step--"
          key="3"
        >
        </v-calculate-tax>
      </transition>
      <div class="mt-5 has-text-centered">
        Ceci est un site de demonstration fictif
      </div>
    </div>
  </section>
</template>

<script>
import API from "./API";
import Form from "./components/form";
import TypeOfCompany from "./components/TypeOfCompany";
import CalculateTax from "./components/CalculateTax";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import StepProgress from "vue-step-progress";
import "vue-step-progress/dist/main.css";

export default {
  name: "App",
  components: {
    "v-step-progress": StepProgress,
    "v-type-of-company": TypeOfCompany,
    "v-form": Form,
    "v-calculate-tax": CalculateTax,
    "v-loading": Loading,
  },
  computed: {
    isLoading() {
      return this.isLoadingSupportedCompanies;
    },
  },
  data() {
    return {
      isLoadingSupportedCompanies: false,
      supportedCompanies: [],
      step: 1,
      company: { type: "" },
    };
  },
  methods: {
    async getSupportedCompanies() {
      try {
        this.isLoadingSupportedCompanies = true;
        this.supportedCompanies = await API.supportedCompanies();
      } finally {
        this.isLoadingSupportedCompanies = false;
      }
    },
    init() {
      this.getSupportedCompanies();
    },
  },
  created() {
    this.init();
  },
};
</script>

<style>
@import "./assets/css/common.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
/* Animation speed */
.animate__animated.animate__fadeIn,
.animate__animated.animate__fadeOut {
  --animate-duration: 300ms;
}
.app-logo {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
</style>
