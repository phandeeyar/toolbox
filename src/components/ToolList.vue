<template>
  <div class="row" id="tool-list">
    <div class="col-md-12 search-box">
      <input v-model="search" type="text" class="form-control" id="toolSearch" placeholder="Search ...">
    </div>
    <div class="col-md-6 col-sm-12" v-for="tool in filteredList">
      <div class="row">
        <div class="col-md-4">
          <img v-if="tool.logo_img" :src="tool.logo_img" :alt="tool.tools_name" width="100%">
          <img v-else src="../assets/images/toolbox_default.png" width="100%" alt="Default Image">
        </div>
        <div class="col-md-8">
            <h3>{{ tool.tools_name }}</h3>
            <p>
              <strong>Difficulity : </strong>
              {{ tool.skill_level }}
            </p>
            <p><strong>Use Cases : </strong>{{ tool.use_cases }}</p>
            <p>
              <router-link class="btn btn-primary" :to="{ name: 'details', params: { toolId: tool.slug }}">View Detials</router-link>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tool-list',
  props: ['tools'],
  data () {
    return {
      search: '',
      tools: this.tools
    }
  },
  computed: {
    filteredList: function () {
      return this.tools.filter((function (_this) {
        return function (tool) {
          return tool.tools_name.toLowerCase().includes(_this.search.toLowerCase())
        }
      })(this))
    }
  }
}
</script>

<style>
  .search-box {
    margin: 30px 0px;
  }
</style>