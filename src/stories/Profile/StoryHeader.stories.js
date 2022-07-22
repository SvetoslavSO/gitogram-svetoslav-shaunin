import StoryHeader from "../../components/StoryHeader/StoryHeader.vue"

export default{
  title: "StoryHeader",
  components: { StoryHeader }
}

export const StoryHead = () => ({
  components: { StoryHeader },
  template: `
    <StoryHeader v-bind:active="false" author="joshua.png" authorName="joshua_l"/>
  `
});

StoryHead.story={
  name: "Заголовок истории"
}