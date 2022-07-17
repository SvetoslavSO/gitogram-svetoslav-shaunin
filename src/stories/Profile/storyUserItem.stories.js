import storyUSerItem from "../../components/storyUserItem/storyUserItem.vue"

export default{
  title: "UserItem",
  components:  storyUSerItem
}

const Progress = () => ({
  components: { storyUSerItem },
  template: `
    <storyUSerItem avatar="josh.png" username="josh"/>
  `
});

export const UserItem = Progress.bind({})