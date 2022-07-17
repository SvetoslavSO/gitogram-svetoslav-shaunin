import comments from "../../components/comments/comments.vue"

export default{
  title: "reviews",
  components: { comments }
}

export const com = () => ({
  components: { comments },
  template: `
    <comments />
  `
});

com.story={
  name: "комментарии"
}