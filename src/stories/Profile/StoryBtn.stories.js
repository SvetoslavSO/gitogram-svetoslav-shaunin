import StoryBtn from '../../components/StoryBtn/StoryBtn.vue'

export default {
  title: 'StoryBtn',
  components: { StoryBtn },
  argTypes:{
    onFollow:{
      action: 'onFollow',
      description: 'fires on click follow button'
    }
  }
}

const FollowBtn = (args) => ({
  components: { StoryBtn },
  data () {
    return { args }
  },
  template: `
    <StoryBtn @onFollow="args.onFollow"/>
  `
})

export const StoryButton = FollowBtn.bind({})

/* StoryButton.story={
  name: "Время истории"
} */