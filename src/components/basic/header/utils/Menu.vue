<template>
  <div :class="[{visible: visible}, 'overlay']">
    <nav>
      <ul>
        <li @click="itemClick"><router-link to="/">Home</router-link></li>
        <li @click="itemClick"><router-link to="/settings">Settings</router-link></li>
        <li @click="itemClick"><router-link to="/import-export">Import Export</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    itemClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(100vh - #{$measure-height-header});
  background-color: $color-overlay;
  transform: translateX(-100%);
  transition: all 0.5s ease;

  &.visible {
    transform: translateX(0%);
    transition: all 0.75s ease;
  }

  nav {
    height: 100%;
    width: 75%;
    background-color: #fff;

    @include media($breakpoint-medium) {
      width: 50%;
    }

    ul {
      li {
        background-color: $color-blue-light;
        border-bottom: 1px solid #fff;

        &:nth-child(even) {
          background-color: $color-grey-main;
        }

        a {
          font-size: 2rem;
          color: #000;
          width: 100%;
          text-decoration: none;
          display: block;
          padding: 15px 0;
          padding-left: calc(#{$measure-padding-general} * 2);
        }
      }
    }
  }
}
</style>
