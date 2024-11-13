<template>
  <section class="moscove">
    <TitleVue :sub_title="subTitle" :title="title" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor
      vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit
      pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices
      eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla
      tempus. Pharetra lorem sem purus nisi libero viverra ipsum.
    </p>

    <Button :isLight="true" >наши салоны</Button>
  </section>
</template>

<script>
import TitleVue from "@/layouts/Title.vue";
import Button from "@/layouts/Button.vue";
export default {
  components: {
    TitleVue,
    Button,
  },
  data() {
    return {
      subTitle: "Не знаете, что выбрать?",
      title: "Посетите наши салоны в Москве",
    };
  },
};
</script>

<style lang="scss" >
@import "../../../assets/styles/components/_vars.scss";
@import "../../../assets/styles/components/_mixins.scss";

.moscove {
  width: 100%;
  padding: 100px 0 120px;
  background: url("../../../assets/images/layouts/sec-bg.jpg");
  text-align: center;
  color: $white;

  p {
    width: 60%;
    margin: 20px auto 30px;
    padding: 10px;
  }
}
</style>