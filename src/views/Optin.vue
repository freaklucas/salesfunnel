<template>
  <div class="optin container">
    <b-row>
      <b-col>
        <TextContent
          variant="header"
          content="Esse é o título chamativo"
          topMargin="50px"
          theme="red"
        />

        <TextContent variant="subheader" content="Subtítulo chamativo :)" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>Coloque aqui sua imagem</b-col>
      <b-col>
        <TextContent variant="paragraph" content="Escreva pequenas mensagens" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TextContent from "../components/TextContent.vue";

export default {
  name: "optin",
  components: {
    TextContent,
  },
};
</script>
