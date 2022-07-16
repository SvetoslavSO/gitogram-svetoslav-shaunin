import Controls from "../../components/Controls/Controls.vue"

export default{
  title: "Cont",
  components: { Controls }
}

export const Cont = () => ({
  components: { Controls },
  template: `
    <Controls />
  `
});

Cont.story={
  name: "Карточка с контролами"
}