<template>
  <section>
    <v-card>
      <template slot="header">Choisissez votre type de société</template>
      <template slot="body">
        <ValidationObserver ref="observer">
          <ValidationProvider
            rules="required"
            name="type de société"
            v-slot="{ valid, errors }"
          >
            <div
              class="select is-fullwidth"
              :class="{ 'is-danger': errors.length > 0, 'is-success': valid }"
            >
              <select v-model="company.type">
                <option :value="''" disabled selected>Choisir</option>
                <option
                  v-for="(s, index) in supportedCompanies"
                  :key="index"
                  :value="s"
                >
                  {{ s.displayName }}
                </option>
              </select>
              <p
                class="help"
                :class="{ 'is-danger': !valid, 'is-success': valid }"
              >
                {{ errors[0] }}
              </p>
            </div>
          </ValidationProvider>
        </ValidationObserver>
      </template>
      <template slot="footer">
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
import Card from "../components/Card";
export default {
  name: "TypeOfCompany",
  components: {
    "v-card": Card,
  },
  props: {
    supportedCompanies: {
      required: true,
    },

    companyData: {
      required: true,
    },
  },
  data() {
    return {
      company: {},
    };
  },
  methods: {
    next() {
      this.$refs.observer.validate().then((isValid) => {
        if (isValid) {
          this.$emit("next", { ...this.company });
        }
      });
    },
  },
  created() {
    this.company = this.companyData;
  },
};
</script>

<style scoped>
</style>