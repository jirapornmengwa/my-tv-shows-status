<template>
  <div class="show-wrapper">
    <img :src="poster" width="170" height="250" alt="" @click="deleteShow">
    <div class="show-wrapper__information">
      <label>Title</label>
      <p>{{title}}</p>
      <label>Status</label>
      <p>{{status}}</p>
      <label>Last Aired</label>
      <p>season {{last_aired}}</p>
      <label>Last Seen</label>
      <p>season {{last_seen}}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    title: {
      type: String
    },
    poster: {
      type: String
    },
    status: {
      type: String
    },
    last_aired: {
      type: Number
    },
    last_seen: {
      type: Number
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
          // TODO: popup confirm deletion
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
