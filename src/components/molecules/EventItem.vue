<template>
  <div class="m-event-item">
    <base-title level="2">
      {{ name }}
      {{ formattedTime }}
    </base-title>
    <p
      v-if="isDescriptionVisible"
      class="m-event-item__description"
    >
      {{ description }}
    </p>
    <div class="m-event-item__buttons">
      <base-button
        variant="outlined"
        @handle-click="toggleDescription"
      >
        Zobacz szczegóły
      </base-button>
      <base-button
        variant="primary"
        @handle-click="toggleModal"
      >
        Kup bilety
      </base-button>
    </div>
    <ticket-modal 
      :is-open="isModalOpen" 
      :title="name" 
      :date="date" 
      subtitle="Zakup biletów" 
      @close="toggleModal"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseTitle from './../atoms/BaseTitle.vue'
import BaseButton from './../atoms/BaseButton.vue'
import TicketModal from './../organisms/TicketModal.vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
})
const isModalOpen = ref(false)
const isDescriptionVisible = ref(false)

const formattedTime = computed(() => {
  const date = new Date(props.time)
  return date.toLocaleTimeString()
})

function toggleModal() {
  isModalOpen.value = !isModalOpen.value
}
function toggleDescription() {
  isDescriptionVisible.value = !isDescriptionVisible.value
}
</script>

<style lang="scss" scoped>
.m-event-item {
  &__description {
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  &__buttons {
    display: flex;
  }
}
</style>


