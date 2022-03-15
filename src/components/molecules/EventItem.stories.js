import EventItem from './EventItem.vue'

export default {
  title: 'Molecules/EventItem',
  component: EventItem,
  argTypes: {
    name: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    time: {
      control: 'date'
    }
  }
}

const Template = (args) => ({
  components: { EventItem },
  setup() {
    return {args}
  },
  template: '<event-item v-bind="args" />'
})

export const Default = Template.bind({});

Default.args = {
  name: 'Królewna Śnieżka',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  time: 'March 20, 2022 14:00:00 GMT+00:00'
}