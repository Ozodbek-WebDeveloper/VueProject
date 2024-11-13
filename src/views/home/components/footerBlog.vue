<template>
  <section class="footer_blog">
    <Title :sub_title="subTitle" :title="title" />
    <div class="container">
      <div class="wrapper">
        <!--  -->
        <ul class="blog_text">
          <li class="title" v-for="item in BlogText" :key="item">
            <i class="fa-solid fa-circle-play"></i> {{ item.text }}
          </li>
        </ul>
        <!--  -->
        <div class="blog_send">
          <form @click.prevent class="send_bg">
            <input type="text" placeholder="Ваш e-mail" v-model="massag" />
            <Button class="btn1" @click="Send">Send</Button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/layouts/Button.vue";
import Title from "@/layouts/Title.vue";
export default {
  components: {
    Title,
    Button,
  },
  data() {
    return {
      subTitle: "Полезные советы и персональный предложения",
      title: "Эксклюзивная рассылка",
      BlogText: [
        {
          text: "Личный менеджер",
        },
        {
          text: "Доставка и оформление",
        },
        {
          text: "Индивидуальный дизайн",
        },
      ],

      botApi: "6744013782:AAFzOLNbqKoPzpoA81W-qDmU4qPzyRbF3go",
      chatAPI: "-1002058504485",
      massag: "",
    };
  },
  methods: {
    async Send() {
      const habar = JSON.stringify(this.massag);
      await fetch(
        `https://api.telegram.org/bot${this.botApi}/sendMessage?chat_id=${this.chatAPI}&parse_mode=html&text=${habar}`
      );
      this.massag = "";
    },
  },
};
</script>

<style lang="scss" scoped >
@import "../../../assets//styles//components/_vars.scss";
@import "../../../assets//styles//components/_mixins.scss";
.footer_blog {
  width: 100%;
  padding: 100px;
  background-image: url(../../../assets/images/layouts/sec-bg.jpg);
  color: $white;
  .container {
    .wrapper {
      margin: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px 50px;

      .blog_text {
        .title {
          font-weight: 300;
        }
      }

      .blog_send {
        padding: 10px;
        border: 1px solid $white;
        .send_bg {
          padding: 10px;
          background-color: $white;
          display: flex;
          gap: 20px;

          input {
            padding-left: 15px;
            border: none;
            border: 1px solid $border_color;
          }
          .btn1 {
            font-size: 14px;
            padding: 10px 35px;
          }
        }
      }
    }
  }
}
</style>