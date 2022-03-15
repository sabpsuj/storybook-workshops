import TicketModal from './TicketModal.vue';

export default {
  title: 'Organisms/TicketModal',
  component: TicketModal,
  argTypes: {
    title: {
      control: 'text'
    },
    subtitle: {
      control: 'text'
    },
    date: {
      control: 'time'
    },
    isOpen: {
      control: 'boolean'
    }
  }
}

const Template = (args) => ({
  components: { TicketModal },
  setup() {
    return { args }
  },
  template: '<ticket-modal v-bind="args" />'
});

export const Default = Template.bind({});

Default.args = {
  title: 'Królewna Śnieżka'
}