import Expansion from '../../components/Expansion/Expansion.vue'
import remarks from '../../pages/welcome/remarks.json'
import lists from '../../pages/welcome/lists.json'

export default {
  title: 'Exp',
  components:  Expansion
}

const Progress = () => ({
  components: { Expansion },
  data () {
    return {
      remarks,
      lists
    }
  },
  template: `
    <Expansion :remarks="remarks" :lists="lists" />
  `
});

export const Exp = Progress.bind({})