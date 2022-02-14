<template>
  <div class="thank-you container">
    <b-row>
      <b-col>
        <TextContent
          variant="header"
          content="Muito obrigado pelo e-mail"
          topMargin="50px"
          theme="blue"
        />
        <TextContent
          variant="subheader"
          content="Subtítulo para aumentar sua curiosidade..."
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <VideoContent
          link="https://www.youtube.com/embed/P0gkZnwlQx8"
          topMargin="30px"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TextContent from "../components/TextContent.vue";
import VideoContent from "../components/VideoContent";

export default {
  name: "ThankYou",
  components: {
    TextContent,
    VideoContent,
  },
};
</script>