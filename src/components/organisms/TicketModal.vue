<template>
  <div
    v-if="isOpen"
    role="dialog"
    aria-modal="dialog"
    class="o-modal"
  >
    <div class="o-modal__header">
      <div>
        <p class="o-modal__title">
          {{ title }}
        </p>
        <p
          v-if="subtitle"
          class="o-modal__subtitle"
        >
          {{ subtitle }}
        </p>
      </div>
      <base-button
        variant="plain"
        aria-label="Zamknij"
        @handle-click="emit('close')"
      >
        ✕
      </base-button>
    </div>
    <div class="o-modal__content">
      <base-form
        submit-text="Zapłać"
        :is-loading="isFormLoading"
        :is-success="isFormSuccess"
        @handle-submit="handleSubmit"
      >
        <base-input
          v-for="field in formFields"
          :id="field.id"
          :key="field.name"
          :type="field.type"
          :label="field.name"
          :error="field.error"
        />
      </base-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseForm from './../molecules/BaseForm.vue'
import BaseInput from './../atoms/BaseInput.vue'
import BaseButton from './../atoms/BaseButton.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  close: {
    type: Function,
    default: () => {}
  }
})
const emit = defineEmits(['close'])

const isFormSuccess = ref(false)
const isFormLoading = ref(false)
const formFields = ref([
  {
    name: 'Imię',
    type: 'text',
    id: 'name',
    required: true,
    error: ''
  },
  {
    name: 'Nazwisko',
    type: 'text',
    id: 'surname',
    required: true,
    error: ''
  },
  {
    name: 'Email',
    type: 'text',
    id: 'email',
    required: true,
    error: ''
  },
  {
    name: 'Liczba biletów',
    type: 'number',
    id: 'qty',
    required: true,
    error: ''
  }
])
const handleSubmit = (e) => {
  const { target: { elements } } = e
  let errors = 0
  formFields.value.forEach(el => {
    const isInvalid = el.required && !elements[el.id].value
    el.error = isInvalid ? 'To pole jest wymagane!' : ''
    if (isInvalid) {
      errors++
    }
  })
  if (!errors) {
    isFormLoading.value = true
    setTimeout(() => {
      isFormSuccess.value = true
      isFormLoading.value = false
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.o-modal {
  position: fixed;
  min-width: 80%;
  max-width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--c-beige);
  box-shadow: 5px 5px 10px #adadad;
  z-index: 1;

  @media (min-width: 900px) {
    min-width: 500px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    background-color: var(--c-accent);
    color: var(--c-light);
    padding: 1rem 1.5rem;

    button {
      color: var(--c-light);
    }
  }

  &__title {
    font-size: 1.5rem;
    font-family: var(--font-heading);
  }

  &__content {
    padding: 1.5rem;
  }
}
</style>
