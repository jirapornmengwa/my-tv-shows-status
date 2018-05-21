<template>
	<div class="homepage">
		<div class="showcase">
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
		<div class="add-show">
			<AddShow></AddShow>
		</div>
	</div>
</template>

<script>
import ShowElement from '@/components/basic/ShowElement';
import AddShow from '@/components/basic/AddShow';
import ShowElementJSON from '@/assets/json/showsTest.json';

export default {
  components: {
    ShowElement,
    AddShow
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'showcase showcase news'
    'showcase showcase add-news'
    'showcase showcase add-show';

  .showcase {
    grid-area: showcase;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px 0;
  }

  .news {
    grid-area: news;
    width: 200px;
    height: 100px;
    background-color: red;
  }

  .add-news {
    grid-area: add-news;
    width: 200px;
    height: 100px;
    background-color: blue;
  }

  .add-show {
    grid-area: add-show;
  }
}
</style>
