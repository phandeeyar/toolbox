<template>
  <div class="container">
    <tool-details v-if="toolId" :tool="tool"/>
    <tool-list v-else :tools="tools"/>
  </div>
</template>
<script>
import ToolList from './ToolList'
import ToolDetails from './ToolDetail'

export default {
  name: 'toolbox',
  props: {
    toolId: String
  },
  components: {
    'tool-list': ToolList,
    'tool-details': ToolDetails
  },
  data () {
    return {
      search: '',
      tools: [],
      tool: ''
    }
  },
  watch: {
    toolId (newID) {
      this.getPost()
    }
  },
  beforeMount () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      var parent = this
      this.$tabletop.init({
        key: '1b4izBhz69O3GaiJx1SL94PNRvaIiZFfq-BM9pMPtBD4',
        callback: function (data, tabletop) {
          parent.tools = data
          console.log(data)
        },
        simpleSheet: true
      })
    },
    getPost () {
      var parent = this
      this.tool = this.tools.find(function (tool) {
        return tool.slug === parent.toolId
      })
    }
  }
}
</script>

