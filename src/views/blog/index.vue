<template>
  <section class="blog_template">
    <div class="block_template">
      <Title :sub_title="subTitle" :title="title" />
    </div>
    <div class="container">
      <div class="wrapper">
        <blogCard
        v-for="post in Blog_Post"
        :key="post.id"
        :image="post.img"
        :title="post.title"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/layouts/Title.vue";
import blogCard from '@/layouts/blogCard.vue';
import BlodPost from '@/BlogPost.js'
export default {
  components: {
    Title,
    blogCard
  },
  data() {
    return {
      subTitle: "JEWELLERY BLOG",
      title: "Articles by Australian designer Simone Walsh",
      Blog_Post:BlodPost
    };
  },
};
</script>

<style lang="scss" >
@import "../../assets/styles/components/_vars.scss";
@import "../../assets/styles/components/_mixins.scss";
.blog_template{
  .block_template{
    padding: 200px 0;
    background-image: url(https://simonewalsh.com/cdn/shop/files/banner-gold-jewellery-2022.jpg?v=1670496877&width=1600);
    color: $white;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($dark, $alpha: 0.5);
    }
  }
  .container{
    .wrapper{
      margin: 100px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 25px 0;

      @include lg{
        justify-content: center;
        gap: 25px;
      }
    }
  }
}
</style>