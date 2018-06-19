<template>
  <div class="input-wrapper">
    <label>{{label}}</label>
    <input :type="type" :name="name" :disabled="disabled" @blur="blur"/>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    name: String,
    label: String,
    disabled: Boolean,
    blur: Function
  }
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  margin-bottom: 10px;

  label {
    display: block;
    margin-bottom: 3px;
    font-size: 1.4rem;
    color: rgba(#000000, 0.6);
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(#000000, 0.12);
    color: rgba(#000000, 0.87);
  }
}
</style>
