<template>
  <div>
    <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Option A</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">Option B</b-form-radio>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      selected: ''
    }
  }
}
</script>

<style scoped>

</style>