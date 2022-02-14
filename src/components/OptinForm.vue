<template>
  <div clas="optin-form">
    <form @submit.prevent="onSubmit">
      <b-form-group>
        <b-form-input
          type="email"
          v-model="form.email"
          size="lg"
          required
          placeholder="Insira email"
        />
        
      </b-form-group>
      <b-button type="submit" :variant="submitColor" size="lg" block style="marginTop:15px">
        {{ submitText }}
      </b-button>
    </form>
  </div>
</template>

<script>

export default {
  name: "OptinForm",
  props: {
    submitText: String,
    submitColor: String,
  },
  data() {
    return {
      form: {
        email: ""
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.form);
    }
  }
}

</script>

<style scoped>
  .btn {
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
