<template>
	<header>
		<i class="menu"></i>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $measure-height-header;
  background-color: #f2f2f2;

  .menu {
    @include icon($icon-bars);
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: $measure-padding-general;
  }
}
</style>
