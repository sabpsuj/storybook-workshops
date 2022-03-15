<template>
  <form
    :class="[{ '-horizontal': isHorizontal }, 'm-form']"
    @submit.prevent="e => emit('handleSubmit', e)"
  >
    <slot v-if="!isSuccess" />
    <base-button
      v-if="!isSuccess"
      type="submit"
      :is-block="true"
      :is-loading="isLoading"
    >
      {{ submitText }}
    </base-button>
    <p v-else>
      Dziękujemy! Wysłaliśmy Twoje zamówienie, bilety otrzymasz w wiadomości email.
    </p>
  </form>
</template>

<script setup>
import BaseButton from './../atoms/BaseButton.vue'

const props = defineProps({
  submitText: {
    type: String,
    default: 'Wyślij'
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  isSuccess: {
    type: Boolean,
    default: false
  },
  handleSubmit: {
    type: Function,
    default: () => {}
  }
})
const emit = defineEmits(['handleSubmit'])
</script>

<style lang="scss" scoped>
.m-form {
  display: flex;
  flex-direction: column;
}
</style>