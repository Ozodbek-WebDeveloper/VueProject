<template>
  <div class="blog" :style="{ backgroundImage: `url(${image})` }">
    <h3 class="title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
  },
};
</script>

<style lang="scss" >
@import "../assets/styles/components/_vars.scss";
@import "../assets/styles/components/_mixins.scss";

.blog {
  width: 350px;
  height: 370px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 30px;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(180, 180, 180, 0) 0%, #333333 100%);
  }

  @include xl {
    width: 290px;
    height: 310px;
  }
  

  .title {
    max-width: 210px;
    text-align: center;
    color: $white;
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    position: relative;
    z-index: 3;
  }
}
</style>