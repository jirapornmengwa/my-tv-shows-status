<template>
	<div class="homepage">
		<div class="series">
			<ShowElement v-for="(show, index) in shows" :key="index" :title="show.title" :poster="show.img"/>
		</div>
		<div class="news">
			<h2>!!!Test</h2>
		</div>
		<div class="add-news">
			<p>!!!Test</p>
		</div>
		<div class="add-series">
			<span>!!!Test</span>
		</div>
		<h1>My Todo App!</h1>
		<TodoList/>
	</div>
</template>

<script>
import TodoList from '@/components/basic/TodoList';
import ShowElement from '@/components/basic/ShowElement';
import ShowElementJSON from '@/assets/json/showElement.json';

export default {
  components: {
    TodoList,
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
