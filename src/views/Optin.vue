<template>
  <div class="optin container">
    <b-row>
      <b-col>
        <TextContent
          variant="header"
          content="Manchete do dia"
          topMargin="50px"
          theme="red"
        />

        <TextContent variant="subheader" content="Mantenha-se atualizado" />
      </b-col>
    </b-row>
    <b-row style="marginTop:20px"> 
      <b-col>
        <b-img
          src="https://images.unsplash.com/photo-1483032469466-b937c425697b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
          fluid
        />
      </b-col>
      <b-col>
        <TextContent variant="paragraph" content="Insira aqui seu e-email para receber novidades e atualizações :)" />
        <OptinForm 
          submitText="Download gratuito!"
          submitColor="warning"
          @submit="handleSubmit"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>

import TextContent from "../components/TextContent.vue";
import OptinForm from "../components/OptinForm.vue";

export default {
  name: "optin",
  components: {
    TextContent,
    OptinForm
  },
  methods: {
    handleSubmit(form) {
      console.log("Adicione novo assinante", form.email);
      this.$router.push({ path: '/thank-you'})
    }
  }
};
</script>
