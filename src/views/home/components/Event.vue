<template>
  <section class="event">
    <div class="container">
      <!--  -->
      <Title :sub_title="subTitle" :title="title" />
      <!--  -->
      <div class="event_btn">
        <button
          class="btn_item"
          v-for="(item, idx) in Collection"
          :key="item"
          :class="{ active: ActiveBtn === idx }"
          @click="ActiveBtn = idx"
        >
          <span>{{ item.ctg_name.Text }}</span>
        </button>
      </div>
      <!--  -->
      <div class="event-wrapper">
        <div
          class="wrapper"
          v-for="item in Collection[ActiveBtn].data"
          :key="item.contId"
          @click="isOpen = item"
        >
          <img :src="item.img" :alt="item.title" />
          <h3 class="title">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </section>

  <HomeModal v-if="isOpen" @action="isOpen = false"  :modalItem="isOpen" />
</template>

<script>
import Title from "@/layouts/Title.vue";
import Collection from "@/Collection";
import HomeModal from "./HomeModal.vue";
export default {
  components: { Title, HomeModal },
  data() {
    return {
      ActiveBtn: 0,
      subTitle: "К мероприятиям",
      title: "Настоящая красота здесь!",
      Collection: Collection,
      isOpen:null
    };
  },
};
</script>

<style lang="scss" >
@import "@/assets/styles/page/home/Event.scss";
</style>