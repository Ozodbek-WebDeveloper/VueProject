<template>
  <section class="blogPost">
    <div class="blockPost">
      <Title :sub_title="subTitle" :title="title" />
    </div>
    <!--  -->
    <div class="container">
      <div class="PostId">
        <img :src="postArray.img" alt="" />
        <div class="postItem">
          <h3 class="title">{{ postArray.title }}</h3>
          <p class="text">{{ postArray.text }}</p>
          <Button @click="$router.push('/')">Home</Button>
        </div>
      </div>
    </div>
    <!--  -->
  </section>
</template>

<script>
import Title from "@/layouts/Title.vue";
import Button from "@/layouts/Button.vue";
import BlogPost from "@/BlogPost.js";
export default {
  components: {
    Title,
    Button,
  },
  data() {
    return {
      subTitle: "JEWELLERY BLOG",
      title: "Articles by Australian designer Simone Walsh",
      PostItem: this.$route.params.postId,
      Blog_Post: BlogPost,
    };
  },
  computed: {
    postArray() {
      return this.Blog_Post.find((user) => user.id === this.PostItem);
    },
  },
};
</script>

<style lang="scss" >
@import "@/assets/styles/components/_vars.scss";
@import "@/assets/styles/components/_mixins.scss";

.blogPost {
  .blockPost {
    padding: 200px 0;
    background-image: url(https://simonewalsh.com/cdn/shop/files/banner-gold-jewellery-2022.jpg?v=1670496877&width=1600);
    color: $white;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($dark, $alpha: 0.5);
    }
  }

  .container {
    .PostId {
      width: 80%;
      margin: 100px auto;
      img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
      }
      .postItem {
        padding: 30px 0;

        .title {
          text-align: start;
          color: $dark;
          margin-bottom: 20px;
        }
        .text {
          color: $dark;
          margin-bottom: 20px;
          text-align: justify;
          line-height: 1.2;
        }
      }
    }
  }
}
</style>