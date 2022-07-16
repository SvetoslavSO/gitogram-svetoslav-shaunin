import StoryCard from "../../components/StoryCard/StoryCard.vue"

export default{
  title: "Card",
  components: { StoryCard }
}

export const card = () => ({
  components: { StoryCard },
  template: `
    <StoryCard />
  `
});

card.story={
  name: "Карточка"
}