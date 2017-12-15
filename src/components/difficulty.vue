<template>
  <div class="diff-wrapper">
    <span v-for="level in diffArray">
      <circle-icon v-if="level"/>
      <cirlce-outline-icon v-else="level"/>
    </span>
  </div>
</template>

<script>
import CircleIcon from 'vue-material-design-icons/circle'
import CircleOutlineIcon from 'vue-material-design-icons/circle-outline'

export default {
  name: 'difficulty',
  props: ['level'],
  components: {
    'circle-icon': CircleIcon,
    'cirlce-outline-icon': CircleOutlineIcon
  },
  computed: {
    diffArray: function () {
      var diffArray = []
      for (var i = 1; i < 6; i++) {
        if (i <= this.level) {
          diffArray.push(true)
        } else {
          diffArray.push(false)
        }
      }
      return diffArray
    }
  }
}
</script>
