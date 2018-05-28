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
