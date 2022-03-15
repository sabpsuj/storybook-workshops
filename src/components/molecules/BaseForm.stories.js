import BaseForm from './BaseForm.vue';

export default {
  title: 'Molecules/BaseForm',
  component: BaseForm,
  argTypes: {
    submitText: {
      control: 'text'
    },
    isLoading: {
      control: 'boolean'
    },
    isSuccess: {
      control: 'boolen'
    },
    onClick: {
      action: 'submit'
    }
  } 
}

const Template = (args) => ({
  components: { BaseForm },
  setup() {
    return { args }
  },
  template: '<base-form v-bind="args" />'
})

export const Default = Template.bind({});

Default.args = {
  isLoading: false
}