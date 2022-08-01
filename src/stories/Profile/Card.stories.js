import StoryCard from '../../components/StoryCard/StoryCard.vue'

export default {
  title: 'Card',
  components: { StoryCard }
}

export const card = () => ({
  components: { StoryCard },
  template: `
    <StoryCard v-bind:active="true" author="joshua.png" authorName="joshua_l"/>
  `
});

card.story = {
  name: 'Карточка'
}