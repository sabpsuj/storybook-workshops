<template>
  <label
    :for="id"
    class="a-field"
  >
    <span class="a-field__label">{{ label }}</span>
    <input
      :id="props.id"
      :type="props.type"
      class="a-field__input"
    >
    <span
      v-if="error"
      class="a-field__error"
    >{{ error }}</span>
  </label>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    required: true
  },
  error: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.a-field {
  margin-bottom: 1.25rem;

  &__input {
    display: block;
    border: 0;
    border-radius: 0;
    padding: 0.5rem;
    margin-right: 0;
    width: 100%;
    border-bottom: 2px solid #fff;
    transition: border-color 0.3s;

    &:focus, &:focus-visible {
      outline: none;
      border-bottom-color: var(--c-accent);
    }
  }

  &__label {
    display: block;
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  &__error {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: var(--c-error);
  }
}
</style>