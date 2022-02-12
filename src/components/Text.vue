<template>
  <div class="text-content" :style="{ marginTop: topMargin }">
    <h1 class="header" v-if="variant === 'header'">
      {{ content }}
    </h1>
    <h2 class="subheader" v-if="variant === 'subheader'">
      {{ content }}
    </h2>
    <h3 class="paragraph" v-if="variant === 'paragraph'" v-html="content"></h3>
  </div>
</template>

<script>
export default {
  name: "Text",
  props: {
    variant: String,
    content: String,
    topMargin: String,
  },
};
</script>

<style scoped>
.header {
  color: rgb(50, 50, 50);
  text-align: center;
}

.subheader {
  font-size: 1.5rem;
  color: rgb(100, 100, 100);
  text-align: center;
}

p {
  color: rgb(124, 124, 124);
}
</style>