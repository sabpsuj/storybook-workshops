import BaseTitle from './BaseTitle.vue';

export default {
  title: 'Atoms/BaseTitle',
  component: BaseTitle,
  argTypes: {
    slotContent: {
      control: 'text'
    },
    level: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4']
    },
  }
};

const Template = (args) => ({
  components: { BaseTitle },
  setup() {
    return { args }
  },
  template: '<base-title v-bind="args">{{ args.slotContent }}</base-title>'
});

export const Default = Template.bind({});

Default.args = {
  level: '1',
  slotContent: 'Title'
};