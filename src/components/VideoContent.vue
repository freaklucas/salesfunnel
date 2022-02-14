<template>
  <div :style="{ marginTop: topMargin }" fluid="lg">
    <b-embed type="iframe" aspect="16by9" :src="link" allowfullscreen />
  </div>
</template>

<script>
export default {
  name: "VideoContent",
  props: {
    link: String,
    topMargin: String,
  },
};
</script>
