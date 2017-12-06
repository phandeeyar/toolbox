<template>
  <div class="row" id="tool-list">
    <div class="col-md-6 col-sm-12" v-for="tool in tools">
      <div class="row">
        <div class="col-md-4">
          <img v-if="tool.logo_img" :src="tool.logo_img" :alt="tool.tools_name" width="100%">
        </div>
        <div class="col-md-8">
            <h3>{{ tool.tools_name }}</h3>
            <p>
              <strong>Difficulity : </strong>
              {{ tool.skill_level }}
            </p>
            <p><strong>Use Cases : </strong>{{ tool.use_cases }}</p>
            <p><router-link class="btn btn-primary" :to="{ name: 'details', params: { toolId: tool.slug }}">View Detials</router-link></p>
        </div>
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
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
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
}
</script>