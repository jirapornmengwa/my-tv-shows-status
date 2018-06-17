<template>
  <div class="popup-wrapper">
    <div @click="trigger">
      <slot name="trigger"></slot>
    </div>
    <div v-if="open" class="overlay">
      <div class="content">
        <slot name="content" :closePopup="trigger"></slot>
      </div>
      <button type="button" v-on:click="trigger">close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    label: String,
    disabled: Boolean,
    blur: Function
  },
  data: function() {
    return {
      open: false
    };
  },
  methods: {
    trigger: function() {
      this.open = !this.open;
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color-overlay;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .content {
    width: 75%;
    height: 75%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
