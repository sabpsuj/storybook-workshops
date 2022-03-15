<template>
  <component
    :is="`h${props.level}`"
    class="a-title"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  level: {
    type: String,
    default: '1'
  }
})
</script>

<style lang="scss" scoped>
.a-title {
  font-family: var(--font-heading);
  margin-top: 0;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 2rem;
}
h4 {
  font-size: 1.5rem;
}
</style>
