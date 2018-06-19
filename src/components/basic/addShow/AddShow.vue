<template>
  <div class="add-show">
    <form @submit="add">
      <Input label="Title" name="title" :blur="inputBlurHandler" />
      <Input label="Status" name="status" :blur="inputBlurHandler" />
      <Input label="Last Aired" name="last_aired" :blur="inputBlurHandler" />
      <Input label="Last Seen" name="last_seen" :blur="inputBlurHandler" />
      <Input label="Poster" name="poster" :blur="inputBlurHandler" />
      <Button type="submit" name="add-show" text="add" importance="primary" />
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Button from "@/components/utils/button/Button";
import Input from "@/components/utils/input/Input";

export default {
  props: {
    sumbitAction: Function
  },
  components: {
    Button,
    Input
  },
  methods: {
    add: function(e) {
      e.preventDefault();

      let show = {
        title: this._data.title,
        status: this._data.status,
        last_aired: this._data.last_aired,
        last_seen: this._data.last_seen,
        poster: this._data.poster
      };
      this.$store.dispatch("shows/addShow", show);

      if (this.sumbitAction) {
        this.sumbitAction();
      }
    },
    inputBlurHandler: function(e) {
      this._data[e.target.name] = e.target.value;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
