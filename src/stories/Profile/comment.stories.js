import comment from "../../components/comment/comment.vue"

export default{
  title: "Com",
  components: comment
}

const Progress = () => ({
  components: { comment },
  template: `
    <comment username="joshua_l" text="Enable performance measuring in production, at the user's request"/>
  `
});

export const Exp = Progress.bind({})