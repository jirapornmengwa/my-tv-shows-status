<template>
	<div>
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
