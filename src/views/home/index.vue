<template>
  <main-section/>
  <Event/>
  <moscove/>
  <HomeBlog/>
  <video-blog/>
  <footerBlog/>
</template>

<script>
import footerBlog from './components/footerBlog.vue'
import Event from './components/Event.vue'
import mainSection from './components/main-section.vue'
import Moscove from './components/Moscove.vue'
import HomeBlog from './components/HomeBlog.vue'
import VideoBlog from './components/videoBlog.vue'
export default {
  components: { mainSection, Event, Moscove,HomeBlog, VideoBlog,footerBlog },

}
</script>

<style lang="scss" >
  
</style>