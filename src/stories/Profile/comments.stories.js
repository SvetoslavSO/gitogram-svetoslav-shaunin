import comments from '../../components/comments/comments.vue'
import remarks from '../../pages/welcome/remarks.json'

export default {
  title: 'reviews',
  components: { comments }
}

export const com = () => ({
  components: { comments },
  data () {
    return {
      remarks
    }
  },
  template: `
    <comments :remarks="remarks" />
  `
});

com.story = {
  name: 'комментарии'
}