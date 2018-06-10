<template>
  <button :type="type" :name="name" :class="importance" :disabled="disabled">{{text}}</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    name: {
      type: String,
      default: 'generic-button'
    },
    text: {
      type: String,
      required: true
    },
    importance: {
      type: String,
      validator: (value) => {
        return ['primary', 'secondary'].indexOf(value) !== -1;
      }
    },
    disabled: Boolean
  }
};
</script>

<style lang="scss" scoped>
button {
  text-transform: uppercase;
  width: 100%;
  padding: 10px;
  background-color: #e5e5e5;
  border: 0;
  border-radius: 3px;

  &:disabled {
    opacity: 0.5;
  }
}

.primary {
  background-color: #1ada93;
}

.secondary {
  background-color: #ff3737;
}
</style>
