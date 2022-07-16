import StoryHeader from "../../components/StoryHeader/StoryHeader.vue"

export default{
  title: "StoryHeader",
  components: { StoryHeader }
}

export const StoryHead = () => ({
  components: { StoryHeader },
  template: `
    <StoryHeader />
  `
});

StoryHead.story={
  name: "Заголовок истории"
}