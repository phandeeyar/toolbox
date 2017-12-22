<template>
  <span :class="labelClass">{{ pricing }}</span>
</template>

<script>
export default {
  props: ['pricing'],
  data () {
    return {
      labels: {
        'free': 'badge-success',
        'freemium': 'badge-primary',
        'paid': 'badge-warning'
      }
    }
  },
  computed: {
    labelClass: function () {
      return 'badge ' + this.labels[this.pricing.toLowerCase()]
    }
  }
}
</script>