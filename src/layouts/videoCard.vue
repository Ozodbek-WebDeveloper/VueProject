<template>
  <div class="video_img">
    <!--  -->
    <img class="video_link" :src="videoLink" alt="" />
    <!--  -->
    <div class="img">
      <img
        class="video_img"
        v-for="item in videoImg"
        :key="item"
        :src="item.img"
        alt=""
      />
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  props: {
    videoLink: String,
    videoImg: String,
  },
};
</script>

<style lang="scss" >
@import "../assets/styles/components/_vars.scss";
@import "../assets/styles/components/_mixins.scss";
.video_img {
  display: flex;
  align-items: center;

  &:nth-child(2) {
    flex-direction: row-reverse;

    // Media

    @include md {
      flex-direction: column;
    }
  }

  //   Media
  @include md {
    flex-direction: column;
  }

  .video_link {
    width: 555px;
    height: 300px;

    //Media

    @include xl {
      width: 446px;
    }

    @include lg {
      width: 291px;
      height: 250px;
    }

    @include md {
      width: 100%;
      height: 250px;
    }
    @include sm {
      height: 200px;
    }
  }
  //   -----------
  .img {
    display: flex;
    width: 100%;
    .video_img {
      width: 278px;
      height: 300px;

      // Media

      @include xl {
        width: 242px;
      }
      @include lg {
        width: 200px;
        height: 250px;
      }
      @include md {
        width: 50%;
        height: 250px;
      }
      @include sm {
        height: 200px;
        
      }
    }
  }
}
</style>