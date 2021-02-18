<template>
  <section>
    <ValidationObserver ref="observer">
      <ValidationProvider
        :rules="{ required: true, digits: 14 }"
        name="Num SIRET"
        v-slot="{ valid, errors }"
      >
        <div class="field">
          <label class="label">Num SIRET</label>
          <input
            v-model="details.siret"
            type="text"
            class="input"
            :class="{ 'is-danger': errors.length > 0, 'is-success': valid }"
          />
          <p class="help" :class="{ 'is-danger': !valid, 'is-success': valid }">
            {{ errors[0] }}
          </p>
        </div>
      </ValidationProvider>
      <ValidationProvider
        rules="required"
        name="Dénomination"
        v-slot="{ valid, errors }"
      >
        <div class="field">
          <label class="label">Dénomination</label>
          <input
            v-model="details.legalName"
            type="text"
            class="input"
            :class="{ 'is-danger': errors.length > 0, 'is-success': valid }"
          />
          <p class="help" :class="{ 'is-danger': !valid, 'is-success': valid }">
            {{ errors[0] }}
          </p>
        </div>
      </ValidationProvider>
      <ValidationProvider
        rules="required"
        name="Adresse"
        v-slot="{ valid, errors }"
      >
        <div class="field">
          <label class="label">Adresse</label>
          <input
            v-model="details.address"
            type="text"
            class="input"
            :class="{ 'is-danger': errors.length > 0, 'is-success': valid }"
          />
          <p class="help" :class="{ 'is-danger': !valid, 'is-success': valid }">
            {{ errors[0] }}
          </p>
        </div>
      </ValidationProvider>
    </ValidationObserver>
  </section>
</template>

<script>
export default {
  name: "SAS",
  data() {
    return {
      details: {},
    };
  },
};
</script>

<style>
</style>