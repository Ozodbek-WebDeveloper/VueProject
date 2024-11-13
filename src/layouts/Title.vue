<template>
  <section class="site_text">
    <h3 class="sub_title" >{{ sub_title }}</h3>
    <h1 class="title" >{{ title }}</h1>

  </section>
</template>

<script>
export default {
   props:{
    sub_title:String,
    title:String
   }
}
</script>

<style lang="scss" scoped >
@import '../assets/styles/components/_vars.scss';
@import '../assets/styles/components/_mixins.scss';

.site_text{
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    position: relative;
    z-index: 10;

    .sub_title{
        font-size: 21px;
        font-weight: 500;
    }

    .title{
        font-size: 35px;
        font-weight: 700;
    }
}
</style>