<template>
  <section class="video_blog">
    <Title :sub_title="subTitle" :title="title" />

    <div class="container">
      <div class="wrapper">
        <VideoCard
          v-for="item in video_Blog"
          :key="item.id"
          :videoLink="item.video_Img"
          :videoImg="item.allImg"
          @click="video_src(item), (isSwiper = item.swiper_Img)"
        />
      </div>
    </div>
  </section>
  <video-modal v-if="isSwiper" :swiperImg="isSwiper" :video="video_link" />
</template>

<script>
import Title from "@/layouts/Title.vue";
import VideoCard from "@/layouts/videoCard.vue";
import videoBlog from "@/videoBlog.js";
import VideoModal from "./videoModal.vue";
export default {
  components: {
    Title,
    VideoCard,
    VideoModal,
  },
  data() {
    return {
      subTitle: "#ojjo_jewerly",
      title: "Мы в социальных сетях",
      video_Blog: videoBlog,
      isSwiper: null,
      video_link: null,
    };
  },
  methods:{
    video_src(item){
        this.video_link = item.video_src
    }
  }
};
</script>

<style lang="scss" >
@import "../../../assets/styles/components/_vars.scss";
@import "../../../assets/styles/components/_mixins.scss";
.video_blog {
  .container {
    .wrapper {
      padding: 100px 0;
    }
  }
}
</style>