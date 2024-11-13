<template>
  <div class="home_Blog">
    <Title :sub_title="subTitle" :title="title" />

    <div class="container">
      <div class="wrapper">
        <blogCard
          v-for="post in getArray"
          :key="post.id"
          :image="post.img"
          :title="post.title"
          @click="$router.push({name:'post',params:{postId: post.id}})"
        />
        
      </div>
    </div>

    <Button @click="$router.push({name:'blog'})" >читать наш блог</Button>
  </div>
</template>

<script>
import Title from "../../../layouts/Title.vue";
import Button from "@/layouts/Button.vue";
import blogCard from "../../../layouts/blogCard.vue";
import BlogPost from "@/BlogPost.js";
export default {
  components: {
    Title,
    Button,
    blogCard,
  },
  data() {
    return {
      subTitle: "Полезные статьи",
      title: "Лучшие советы по подбору дорогих подарков",
      Blog_Post:BlogPost
    };
  },
  computed:{
    getRandom(){
      const max = BlogPost.length - 3
      const min = 0
      return Math.floor(Math.random() * (max - min) + min)
    },
    getArray(){
      return this.Blog_Post.slice(this.getRandom, this.getRandom + 3)
    }
  }
};
</script>

<style lang="scss" >
@import "../../../assets/styles/components/_vars.scss";
@import "../../../assets/styles/components/_mixins.scss";

.home_Blog {
  padding: 100px 0 120px;
  text-align: center;
  @include md {
    padding: 50px 0;
  }

  .container {
    .wrapper {
      padding: 60px 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

    //   media
      @include lg {
        justify-content: center;
        gap: 25px ;
      }
    }
  }
}
</style>