<template>
  <div class="show-wrapper">
    <img :src="show.poster" width="170" height="250" :alt="`${show.title} poster`" @click="deleteShow">
    <div class="show-wrapper__information">
      <label>Title</label>
      <p>{{show.title}}</p>
      <label>Status</label>
      <p>{{show.status}}</p>
      <label>Last Aired</label>
      <p>season {{show.last_aired}}</p>
      <label>Last Seen</label>
      <p>season {{show.last_seen}}</p>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import moment from "moment";

export default {
  props: {
    show: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      deleteCounter: {
        times: 0,
        time: null
      }
    };
  },
  methods: {
    deleteShow: function() {
      let now = moment();
      if (now.diff(this.deleteCounter.time) <= 500 || this.deleteCounter.time === null) {
        if (this.deleteCounter.times === 2) {
          this.$store.dispatch("shows/deleteShow", this.show._id);
          this.resetDeleteCounter();
        } else {
          this.deleteCounter = {times: this.deleteCounter.times + 1, time: now};
        }
      } else {
        this.resetDeleteCounter();
      }
    },
    resetDeleteCounter: function() {
      this.deleteCounter = {times: 0, time: null};
    }
  }
};
</script>

<style lang="scss" scoped>
.show-wrapper {
  display: flex;

  &__information {
    margin-left: 10px;

    label {
      text-decoration: underline;
    }

    p {
      margin: 5px 0 10px 0;
    }
  }
}
</style>
