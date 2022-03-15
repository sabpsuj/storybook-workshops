<template>
  <button
    :class="[{'-block': isBlock}, `a-btn -${variant}`]"
    :disabled="isLoading"
    :style="{backgroundColor: backgroundColor}"
    @click="emit('handleClick')"
  >
    <slot />
    <loading-icon v-if="isLoading" />
  </button>
</template>

<script setup>
import LoadingIcon from './LoadingIcon.vue'

const props = defineProps({
  backgroundColor: {
    type: String,
    default: '#0f4031' // optional to show possibility of adding colors
  },
  variant: {
    type: String,
    default: 'primary'
  },
  handleClick: {
    type: Function,
    default: () => {}
  },
  isBlock: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['handleClick'])
</script>

<style lang="scss" scoped>
.a-btn {
  position: relative;
  border: 4px solid var(--c-accent);
  letter-spacing: 1px;
  font-size: 1rem;
  text-transform: uppercase;
  // word-wrap: normal; // Left for testing purposes
  word-break: keep-all;
  padding: 0.75rem 1rem;
  margin: .25rem;
  max-width: 200px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.-primary {
    background-color: var(--c-accent);
    color: var(--c-light);
    &:hover {
      background-color: transparent;
      color: var(--c-text);
    }
  }

  &.-outlined {
    background-color: transparent;
    &:hover {
      background-color: var(--c-accent);
      color: var(--c-light);
    }
  }

  &.-plain {
    background-color: transparent;
    padding: 0;
  }

  &.-block {
    display: block;
    margin: 0;
  }

  &:disabled {
    cursor: default;
    &, &:hover {
      background-color: #508776;
      border-color: #508776;
      color: var(--c-light);
    }
  }

  svg {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
}
</style>