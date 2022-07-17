import navigationMenu from "../../components/navigation-menu/navigation-menu.vue"

export default{
  title: "Nav",
  components:  navigationMenu
}

const Progress = () => ({
  components: { navigationMenu },
  template: `
    <navigationMenu photo="joshua.png"/>
  `
});

export const Exp = Progress.bind({})