<template>
	<div class="homepage">
		<div class="series">
			<ShowElement v-for="(show, index) in shows" :key="index" :title="show.title" :poster="show.img"/>
		</div>
		<div class="news">
		</div>
		<div class="add-news">
		</div>
		<div class="add-series">
		</div>
	</div>
</template>

<script>
import ShowElement from '@/components/basic/ShowElement';
import ShowElementJSON from '@/assets/json/showElement.json';

export default {
  components: {
    ShowElement
  },
  data() {
    return {
      shows: ShowElementJSON
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
