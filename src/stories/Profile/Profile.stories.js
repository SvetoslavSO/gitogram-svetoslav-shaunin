import StoryBtn from "../../components/StoryBtn/StoryBtn.vue"
import StoryHeader from "../../components/StoryHeader/StoryHeader.vue"

export default{
  title: "profile",
  components: { StoryBtn, StoryHeader }
}

export const defaultView = () => ({
  components: { StoryBtn, StoryHeader },
  template: `
    <StoryHeader />
    <StoryBtn />
  `
});

defaultView.story={
  name: "Стандартный вид"
}