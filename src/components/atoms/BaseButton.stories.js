import BaseButton from './BaseButton.vue';

export default {
  title: 'Atoms/BaseButton',
  component: BaseButton,
  argTypes: {
    onClick: {},
    variant: {
      control: 'select',
      options: ['primary', 'outlined', 'plain']
    },
    slotContent: {
      control: 'text'
    },
    isBlock: {
      control: 'boolean'
    },
    isLoading: {
      type: 'boolean'
    }
  }
}

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<base-button v-bind="args">{{ args.slotContent }}</base-button>'
});

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary'
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: 'outlined'
};

export const Plain = Template.bind({});

Plain.args = {
  variant: 'plain'
};