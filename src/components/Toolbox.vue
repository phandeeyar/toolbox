<template>
  <div class="container">
    <tool-details v-if="toolId" :tool="tool"/>
    <tool-list v-else :tools="tools" :loading="loading" :categorySlug="categorySlug" :categories="categories"/>
    <jumper-loading v-if="loading" style="margin:100px auto;"/>
  </div>
</template>
<script>
import ToolList from './ToolList'
import ToolDetails from './ToolDetail'
import {Jumper} from 'vue-loading-spinner'

export default {
  name: 'toolbox',
  props: {
    toolId: String,
    categorySlug: String
  },
  components: {
    'tool-list': ToolList,
    'tool-details': ToolDetails,
    'jumper-loading': Jumper
  },
  data () {
    return {
      search: '',
      tools: [],
      categories: [],
      tool: '',
      loading: true
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
          parent.tools = tabletop.sheets('tools').all()
          parent.categories = tabletop.sheets('categories').all()
          parent.getPost()
          parent.loading = false
        }
      })
    },
    getPost () {
      var parent = this
      this.tool = this.tools.find(function (tool) {
        return tool.slug === parent.toolId
      })
    },
    getToolsByCategory () {
      var parent = this
      this.tool = this.tools.find(function (tool) {
        return tool.category === parent.categorySlug
      })
    }
  }
}
</script>

