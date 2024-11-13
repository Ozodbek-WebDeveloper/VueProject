<template>
  <section class="video_Modal">
    <div class="modal_item">
      <div class="video_pleyr">
        <vue-plyr>
          <div>
            <iframe
              :src="video"
            ></iframe>
          </div>
        </vue-plyr>
      </div>
      <!-- --- -->
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="item in swiperImg" :key="item">
          <img :src="item.img" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  props: {
    swiperImg: Array,
    video:String
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<style lang="scss" >
@import "../../../assets/styles/components/_vars.scss";
@import "../../../assets/styles/components/_mixins.scss";

.video_Modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($dark, $alpha: 0.7);
  z-index: 090909090;
  padding: 50px 0;
  overflow: scroll;

  .modal_item {
    width: 1000px;
    margin: 0 auto;
    background: $white;
  }

//   -hvbzdfblsdfb
  .swiper {
    width: 100%;
    margin-top: 100px;
    padding: 20px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>