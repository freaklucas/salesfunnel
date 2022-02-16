<template>
  <div class="countdown-timer">
    <Countdown :deadline="endDate" />
  </div>
</template>

<script>
import Countdown from "vuejs-countdown";

export default {
  name: "CountDownTimer",
  components: { Countdown },
  props: { endDate: String },
};
</script>

<style>
.countdown-timer {
  padding: 25px;
  text-align: center;
}

.countdown-section {
  display: inline-block;
  margin-right: 25px;
}

.vue-countdown .digit {
  display: block;
  border: 4px solid orange;
  color: darkorange;
  padding: 10px;
  border-radius: 100px;
  width: 72px;
  margin-bottom: 10px;
}

.text {
  font-size: 1rem;
  font-weight: bold;
  color: gray;
}
</style>