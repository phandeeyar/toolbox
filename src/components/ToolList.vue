<template>
  <div id="tool-list">
    <div class="row filter-bar">
      <div class="col-md-8 col-sm-12 search-box">
        <input v-model="filters.search" type="text" class="form-control" id="toolSearch" placeholder="Search ...">
      </div>
      <div class="col-md-4 col-sm-12 category-filter">
        <b-form-select v-model="filters.category" :options="categories" class="mb-3" v-on:change="changeRoute($event)">
          <template slot="first">
              <option value=""> -- Filter Category -- </option>
          </template>
        </b-form-select>
      </div>  
    </div>
    <div class="row">
      <div class="col-md-12" v-if="toolCount === 0 && loading === false">
        No Result for <strong>{{ filters.search }}</strong> <span v-if="filters.category">in <strong>{{ filters.category }}</strong> Category</span>
      </div>
      <div class="col-md-6 col-sm-12 tool-wrapper" v-for="tool in filteredList">
        <div class="row">
          <div class="col-md-4 col-sm-4 tool-logo-wrapper">
            <router-link :to="{ name: 'details', params: { toolId: tool.slug }}">
            <img v-if="tool.logo_img" :src="tool.logo_img" :alt="tool.tools_name" width="100%">
            <img v-else src="../assets/images/toolbox_default.png" width="100%" alt="Default Image">
            </router-link>
          </div>
          <div class="col-md-8 col-sm-8">
              <h3>{{ tool.tools_name }}</h3>
              <div class="prop-wrapper">
                <platforms :tool="tool"/>
              </div>
              <p>{{ tool.use_cases }}</p>
              <p>
                <router-link class="btn btn-primary" :to="{ name: 'details', params: { toolId: tool.slug }}">View Details</router-link>
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Platforms from './platforms'
export default {
  name: 'tool-list',
  props: ['tools', 'loading', 'categorySlug', 'categories'],
  components: {
    'platforms': Platforms
  },
  data () {
    return {
      filters: {
        category: '',
        search: ''
      }
    }
  },
  computed: {
    filteredList: function () {
      return this.tools.filter((function (_this) {
        return function (tool) {
          if (_this.filters.category !== '') {
            return tool.category === _this.filters.category && tool.tools_name.toLowerCase().includes(_this.filters.search.toLowerCase())
          } else {
            return tool.tools_name.toLowerCase().includes(_this.filters.search.toLowerCase())
          }
        }
      })(this))
    },
    toolCount: function () {
      return this.filteredList.length
    }
  },
  beforeMount () {
    if (this.categorySlug) {
      this.filters.category = this.categorySlug
    }
  },
  methods: {
    changeRoute: function (event) {
      console.log('change to ' + event)
      this.$router.push({ name: 'category', params: { categorySlug: event } })
    }
  }
}
</script>

<style>
  .search-box, .category-filter {
    margin: 30px 0px;
  }
</style>