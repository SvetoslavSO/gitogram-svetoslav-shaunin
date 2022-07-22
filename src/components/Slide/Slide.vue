<template>
  <SliderElem />
</template>

<script>
import { SliderElem } from '../../components/SliderElem'

export default {
  components : { SliderElem },
  data() {
    return {};
  },
  computed: {},
  methods: {
    getStoryData(obj) {
      return {
        id: obj.id,
      }
    }
  }
}
</script>