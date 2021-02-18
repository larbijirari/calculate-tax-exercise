<template>
  <section>
    <v-card>
      <template slot="header"> Informations complémentaires </template>
      <template slot="body">
        <h1 class="subtitle is-3">{{ company.type.displayName }}</h1>
        <component ref="form" :is="companyForm"></component>
      </template>
      <template slot="footer">
        <button class="button is-outlined" type="button" @click="previous()">
          Précedent
        </button>
        <button
          class="button is-success is-outlined"
          type="button"
          @click="next()"
        >
          Suivant
        </button>
      </template>
    </v-card>
  </section>
</template>

<script>
import SAS from "./SAS";
import SARL from "./SARL";
import CARD from "../Card";
export default {
  name: "Form",
  components: {
    "v-card": CARD,
    SAS: SAS,
    SARL: SARL,
  },
  computed: {
    companyForm() {
      return this.company && this.company.type ? this.company.type.name : null;
    },
  },
  props: {
    companyData: {
      required: true,
    },
  },
  data() {
    return { company: {} };
  },
  methods: {
    next() {
      this.$refs.form.$refs.observer.validate().then((isValid) => {
        if (isValid) {
          this.company.details = { ...this.$refs.form.details };
          this.$emit("next", this.company);
        }
      });
    },
    previous() {
      this.company.details = {};
      this.$emit("previous", this.company);
    },
  },
  created() {
    this.company = this.companyData;
  },
};
</script>

<style>
</style>