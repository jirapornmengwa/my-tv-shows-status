<template>
  <div :class="[{visible: visible}, 'overlay']">
    <nav>
      <ul>
        <li><router-link to="/settings">settings</router-link></li>
        <li><router-link to="/importExport">importExport</router-link></li>
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
  background-color: rgba(#000, 0.4);
  transform: translateX(-100%);
  transition: all 1s ease;

  &.visible {
    transform: translateX(0%);
    transition: all 1s ease;
  }

  nav {
    height: 100%;
    width: 50%;
    background-color: #fff;

    ul {
      li {
        background-color: #e6f0ff;

        &:nth-child(even) {
          background-color: #f2f2f2;
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
