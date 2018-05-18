<template>
	<div class="homepage">
		<div class="series">
			<h1>!!!Test</h1>
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

export default {
  components: {
    TodoList
  }
};
</script>

<style lang="scss" scoped>
</style>
