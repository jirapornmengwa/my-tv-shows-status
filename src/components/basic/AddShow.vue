<template>
  <div class="wrapper">
    <form @submit="add">
      <label>Title</label>
      <input type="text" name="title" v-model="title">
      <label>Status</label>
      <input type="text" name="status" v-model="status">
      <label>Last Aired</label>
      <input type="text" name="last_aired" v-model="last_aired">
      <label>Last Seen</label>
      <input type="text" name="last_seen" v-model="last_seen">
      <label>Poster</label>
      <input type="text" name="poster" v-model="poster">
      <button type="submit" name="button">ADD</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      title: '',
      status: '',
      last_aired: '',
      last_seen: '',
      poster: ''
    };
  },
  methods: {
    add: function(e) {
      e.preventDefault();
      debugger;

      let shows =
        localStorage.getItem('shows') === null
          ? []
          : JSON.parse(localStorage.getItem('shows'));
      let show = {
        title: this.title,
        status: this.status,
        last_aired: this.last_aired,
        last_seen: this.last_seen,
        poster: this.poster
      };
      shows.push(show);
      localStorage.setItem('shows', JSON.stringify(shows));
    }
  }
};
</script>

<style lang="scss" scoped>
label,
button {
  display: block;
}
</style>
