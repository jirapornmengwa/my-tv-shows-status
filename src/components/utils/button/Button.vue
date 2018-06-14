<template>
  <button :type="type" :name="name" :class="importance" :disabled="disabled" v-on="action ? {click: action} : {}">{{text}}</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    name: String,
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
    disabled: Boolean,
    action: Function
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
  background-color: $colors-primary;
  color: #fff;

  &:hover {
    background-color: $colors-primary-dark;
  }
}

.secondary {
  background-color: $colors-secondary;
  color: #fff;

  &:hover {
    background-color: $colors-secondary-dark;
  }
}
</style>
