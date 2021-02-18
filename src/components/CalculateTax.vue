<template>
  <section>
    <v-card>
      <template slot="header"> Calcul de vos impots </template>
      <template slot="body">
        <ValidationObserver ref="observer">
          <ValidationProvider
            :rules="{ required: true, numeric: true }"
            name="CA"
            v-slot="{ valid, errors }"
          >
            <div class="field">
              <label class="label" for="ca"> Votre chiffre d'affaire </label>
              <input
                id="ca"
                v-model="amount"
                class="input"
                placeholder="Montant"
                :class="{ 'is-danger': errors.length > 0, 'is-success': valid }"
              />
              <p
                class="help"
                :class="{ 'is-danger': !valid, 'is-success': valid }"
              >
                {{ errors[0] }}
              </p>
            </div>
          </ValidationProvider>
        </ValidationObserver>
        <hr />
        <div v-if="tax" class="has-text-centered">
          <span class="is-size-2">
            Montant de vos impots : <b>{{ tax }} €</b></span
          >
        </div>
      </template>
      <template slot="footer">
        <button class="button is-outlined" type="button" @click="previous()">
          Précedent
        </button>
      </template>
    </v-card>
  </section>
</template>

<script>
import CARD from "./Card";
export default {
  name: "CalculateTax",
  components: {
    "v-card": CARD,
  },
  props: {
    companyData: {
      required: true,
    },
  },
  computed: {
    tax() {
      return this.amount && !isNaN(this.amount)
        ? parseFloat(this.amount * this.company.type.rate).toFixed(2)
        : null;
    },
  },
  data() {
    return {
      amount: null,
    };
  },
  methods: {
    previous() {
      this.amount = null;
      this.$emit("previous");
    },
  },
  created() {
    this.company = this.companyData;
  },
};
</script>

<style scoped>
</style>
