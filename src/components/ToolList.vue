<template>
  <div class="row" id="tool-list">
    <div class="col-md-6 col-sm-12" v-for="tool in tools">
      <div class="col-md-4"><img src="" :alt="tool.tools_name" width="100%"></div>
      <div class="col-md-8">
          <h3>{{ tool.tools_name }}</h3>
          <p><strong>Difficulity : </strong>{{ tool.skill_level }}</p>
          <p><strong>Use Cases : </strong>{{ tool.use_cases }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tools: []
    }
  },
  methods: {

  },
  created () {
    var parent = this
    this.$tabletop.init({
      key: '1b4izBhz69O3GaiJx1SL94PNRvaIiZFfq-BM9pMPtBD4',
      callback: function (data, tabletop) {
        parent.tools = data
      },
      simpleSheet: true
    })
  }
}
</script>