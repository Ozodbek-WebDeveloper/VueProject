<template>
  <button class="site_btn" :class="{ light: isLight }">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    isLight: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="scss" >
@import "../assets/styles/components/_vars.scss";
@import "../assets/styles/components/_mixins.scss";

.site_btn {
  padding: 15px 35px;
  border: 1px solid $border_color;
  background: $dark;
  color: $white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &.light {
    background: $white;
    color: $dark;
  }
}
</style>