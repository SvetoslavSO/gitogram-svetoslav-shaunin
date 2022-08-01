import Profile from '../../components/Profile/Profile.vue'

export default {
  title: 'profile',
  components: { Profile }
}

export const defaultView = () => ({
  components: { Profile },
  template: `
    <Profile author="Andrew.png" authorName="Andrew"/>
  `
});

defaultView.story = {
  name: 'Стандартный вид'
}