<template>
  <div class="showcase">
    <Show
      v-for="(show, index) in shows"
      :key="index"
      :title="show.title"
      :poster="show.poster"
      :status="show.status"
      :last_aired="show.last_aired"
      :last_seen="show.last_seen">
    </Show>
  </div>
</template>

<script>
import Show from '@/components/basic/Showcase/utils/Show';
import ShowElementJSON from '@/assets/json/showsTest.json';

export default {
  components: {
    Show
  },
  data() {
    return {
      shows: ShowElementJSON
    };
  }
};
</script>

<style lang="scss">
.showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 0;
}
</style>
