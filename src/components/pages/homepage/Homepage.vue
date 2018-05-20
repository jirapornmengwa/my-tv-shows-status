<template>
	<div class="homepage">
		<div class="series-wrapper">
			<ShowElement
				v-for="(show, index) in shows"
				:key="index"
				:title="show.title"
				:poster="show.poster"
				:status="show.status"
				:last_aired="show.last_aired"
				:last_seen="show.last_seen">
			</ShowElement>
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
import ShowElementJSON from '@/assets/json/showsTest.json';

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
	.homepage {
		.series-wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 10px 0;
		}
	}
</style>
