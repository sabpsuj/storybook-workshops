import BaseInput from './BaseInput.vue';

export default {
  title: 'Atoms/BaseInput',
  component: BaseInput,
  argTypes: {
    onChange: {},
    label: {
      control: 'text'
    },
    type: {
      control: 'select',
      options: ['text', 'number']
    },
    error: {
      control: 'text'
    }
  }
}

const Template = (args) => ({
  components: { BaseInput },
  setup() {
    return { args }
  },
  template: '<base-input v-bind="args" />'
})

export const Default = Template.bind({});

Default.args = {
  label: 'Name',
  type: 'text',
  error: ''
}