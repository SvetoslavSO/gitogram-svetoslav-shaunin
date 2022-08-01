import LibraryBtn from '../../components/LibraryBtn/LibraryBtn.vue'

export default {
  title: 'LibraryBtn',
  components:  LibraryBtn,
  argTypes:{
    on:{
      action: 'on',
      description: 'fires when Clicked'
    }
  }
}

const Progress = (args) => ({
  components: { LibraryBtn },
  data () {
    return { args }
  },
  template: `
    <LibraryBtn @on="args.on"/>
  `
});

export const Lib = Progress.bind({})