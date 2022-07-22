import SliderElem from "../../components/SliderElem/SliderElem.vue"

export default{
  title: "SliderElement",
  components: { SliderElem }
}

export const SliderElement = () => ({
  components: { SliderElem },
  template: `
    <SliderElem v-bind:active="false" author="joshua.png" authorName="joshua_l"/>
  `
});

SliderElement.story={
  name: "Карточка с контролами"
}