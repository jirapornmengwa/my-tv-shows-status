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
import Show from '@/components/basic/showcase/utils/Show';
import {mapState, mapActions} from 'vuex';

export default {
  components: {
    Show
  },
  computed: mapState({
    shows: (state) => state.shows.showsList
  }),
  created() {
    this.$store.dispatch('shows/getShows');
  }
};
</script>

<style lang="scss" scoped>
.showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 0;
}
</style>
