<template>
  <div class="add-show">
    <form @submit="add">
      <label>Title</label>
      <input type="text" name="title" v-on:blur="inputBlurHandler">
      <label>Status</label>
      <input type="text" name="status" v-on:blur="inputBlurHandler">
      <label>Last Aired</label>
      <input type="text" name="last_aired" v-on:blur="inputBlurHandler">
      <label>Last Seen</label>
      <input type="text" name="last_seen" v-on:blur="inputBlurHandler">
      <label>Poster</label>
      <input type="text" name="poster" v-on:blur="inputBlurHandler">
      <Button type="submit" name="add-show" text="add" importance="primary" />
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Button from '@/components/utils/button/Button';

export default {
  components: {
    Button
  },
  methods: {
    add: function(e) {
      e.preventDefault();
      let show = {
        title: this.title,
        status: this.status,
        last_aired: this.last_aired,
        last_seen: this.last_seen,
        poster: this.poster
      };
      this.$store.dispatch('shows/addShow', show);
    },
    inputBlurHandler: function(e) {
      this._data[e.target.name] = e.target.value;
    }
  }
};
</script>

<style lang="scss">
.add-show {
  label,
  button {
    display: block;
  }
}
</style>
