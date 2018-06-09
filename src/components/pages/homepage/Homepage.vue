<template>
	<div class="homepage">
		<Showcase />
		<div class="news">
		</div>
		<div class="add-news">
		</div>
		<AddShow></AddShow>
	</div>
</template>

<script>
import Showcase from '@/components/basic/showcase/Showcase';
import AddShow from '@/components/basic/addShow/AddShow';

export default {
  components: {
    Showcase,
    AddShow
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
  }

  .news {
    grid-area: news;
    width: 200px;
    height: 100px;
    background-color: lightgrey;
  }

  .add-news {
    grid-area: add-news;
    width: 200px;
    height: 100px;
    background-color: grey;
  }

  .add-show {
    grid-area: add-show;
  }
}
</style>
