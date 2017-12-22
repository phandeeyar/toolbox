<template>
  <div class="row" id="tool-list">
    <div class="col-md-12 search-box">
      <input v-model="search" type="text" class="form-control" id="toolSearch" placeholder="Search ...">
    </div>
    <div class="col-md-6 col-sm-12 tool-wrapper" v-for="tool in filteredList">
      <div class="row">
        <div class="col-md-4 col-sm-4 tool-logo-wrapper">
          <img v-if="tool.logo_img" :src="tool.logo_img" :alt="tool.tools_name" width="100%">
          <img v-else src="../assets/images/toolbox_default.png" width="100%" alt="Default Image">
        </div>
        <div class="col-md-8 col-sm-8">
            <h3>{{ tool.tools_name }}</h3>
            <div class="prop-wrapper">
              <div class="platform-wrapper">
                <a :href="tool.window" v-if="tool.window"><windows-icon/></a>
                <a :href="tool.mac" v-if="tool.mac"><mac-icon/></a>
                <a :href="tool.linux" v-if="tool.linux"><linux-icon/></a>
                <a :href="tool.android" v-if="tool.android"><android-icon/></a>
                <a :href="tool.ios" v-if="tool.ios"><ios-icon/></a>
                <a :href="tool.web" v-if="tool.web"><web-icon/></a>  
              </div>
            </div>
            <p>{{ tool.use_cases }}</p>
            <p>
              <router-link class="btn btn-primary" :to="{ name: 'details', params: { toolId: tool.slug }}">View Detials</router-link>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WindowsIcon from 'vue-material-design-icons/windows'
import MacIcon from 'vue-material-design-icons/apple-finder'
import LinuxIcon from 'vue-material-design-icons/linux'
import AndroidIcon from 'vue-material-design-icons/android'
import IOSIcon from 'vue-material-design-icons/apple-ios'
import WebIcon from 'vue-material-design-icons/web'
export default {
  name: 'tool-list',
  props: ['tools'],
  components: {
    'windows-icon': WindowsIcon,
    'mac-icon': MacIcon,
    'linux-icon': LinuxIcon,
    'android-icon': AndroidIcon,
    'ios-icon': IOSIcon,
    'web-icon': WebIcon
  },
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