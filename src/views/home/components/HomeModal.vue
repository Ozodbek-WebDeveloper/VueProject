<template>
  <section class="modal" @click="$emit('action')">
    <div class="modal_box" @click.stop>
      <img :src="modalItem.img" alt="" />
      <div class="content">
        <h1>{{ modalItem.title }}</h1>
        <p>{{ modalItem.desc }}</p>
        <Button @click="$emit('action')">close</Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../../../layouts/Button.vue";
export default {
  props: {
    modalItem: Object,
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss" >
@import "../../../assets/styles/components/_vars.scss";
@import "../../../assets/styles/components/_mixins.scss";
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($black, $alpha: 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal_box {
    width: 50%;
    background: $white;

    //  media
    @include lg {
        width: 70%;
    }
    @include md {
        width: 85%;
    }
    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;

      @include md{
        height: 30vh;
      }
    }

    .content {
      padding: 30px;
      color: $dark;

      @include md{
        padding: 20px;
      }
    }
  }
}
</style>