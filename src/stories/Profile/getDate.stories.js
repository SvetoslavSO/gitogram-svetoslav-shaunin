import ServerRequest from '../../components/ServerRequest/ServerRequest.vue'

export default {
  title: 'getDate',
  components: { ServerRequest }
}

export const Req = () => ({
  components: { ServerRequest },
  template: `
    <ServerRequest />
  `
});

Req.story = {
  name: 'Обращение к серверу'
}