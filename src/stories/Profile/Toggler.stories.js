import toggler from '../../components/toggler/toggler.vue'

export default {
  title: 'TogglerBtn',
  components:  toggler,
  argTypes:{
    onToggle:{
      action: 'onToggle',
      description: 'fires when Toggle'
    }
  }
}

const Progress = (args) => ({
  components: { toggler },
  data () {
    return { args }
  },
  template: `
    <toggler @onToggle="args.onToggle"/>
  `
});

export const TogglerBtn = Progress.bind({})