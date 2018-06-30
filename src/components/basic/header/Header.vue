<template>
	<header>
		<i :class="[{close: menuVisibility}, 'menu']" @click="trigger" />
		<Menu :visible="menuVisibility" :itemClick="trigger" />
	</header>
</template>

<script>
import Menu from "@/components/basic/header/utils/Menu";

export default {
  components: {
    Menu
  },
  data: function() {
    return {
      menuVisibility: false
    };
  },
  methods: {
    trigger: function() {
      this.menuVisibility = !this.menuVisibility;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $measure-height-header;
  background-color: $color-grey-main;
  display: flex;
  align-items: center;

  .menu {
    @include icon($icon-menu-open);
    padding-left: $measure-padding-general;
    font-size: 2rem;

    &.close:after {
      content: $icon-menu-close;
    }
  }
}
</style>
