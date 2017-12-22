<template>
  <div class="row tool-details">
    <div class="col-md-12 tool-bar">
      <router-link class="btn btn-primary" :to="{ name: 'toollist'}">Back</router-link>
    </div>
    <div class="col-md-3">
      <div class="logo-wrapper">
        <img v-if="tool.logo_img" :src="tool.logo_img" :alt="tool.tools_name" width="100%" class="tool-logo">
        <img v-else src="../assets/images/toolbox_default.png" width="100%" alt="Default Image" class="tool-logo">
      </div>
      <div class="tool-info text_center">
        <div class="prop-wrapper" v-if="tool.pricing">
          <pricing :pricing="tool.pricing"/>
        </div>
        <div class="prop-wrapper" v-if="tool.skill_level">
          <span class="prop-label">Difficulty</span> : <skill-level :level=tool.skill_level />
        </div>
        <div class="prop-wrapper">
          <span class="prop-label">Platforms</span> : 
          <div class="platform-wrapper">
            <a :href="tool.window" v-if="tool.window"><windows-icon/></a>
            <a :href="tool.mac" v-if="tool.mac"><mac-icon/></a>
            <a :href="tool.linux" v-if="tool.linux"><linux-icon/></a>
            <a :href="tool.android" v-if="tool.android"><android-icon/></a>
            <a :href="tool.ios" v-if="tool.ios"><ios-icon/></a>
            <a :href="tool.web" v-if="tool.web"><web-icon/></a>  
          </div>
        </div>
        <div class="prop-wrapper" v-if="tool.opensource_yes">
          <span class="prop-label">Opensourced : </span> {{ tool.opensource_yes }}
        </div>
        <div class="prop-wrapper" v-if="tool.unicode_support">
          <span class="prop-label">Unicode Support : </span> {{ tool.unicode_support }}
        </div>
      </div>
    </div>
    <div class="col-md-9">
      <h1>{{ tool.tools_name }}</h1>
      <p><span class="prop-label">Type</span> : <a href="#">{{ tool.category }}</a></p>
      <p><span class="prop-label">Use Cases</span> : {{ tool.use_cases }}</p>
      <p><span class="prop-label">Review</span> : {{ tool.burmese_review }}</p>
      <p><span class="prop-label">Pros</span> : {{ tool.pros }} </p>
      <p><span class="prop-label">Cons</span> : {{ tool.cons }}</p>
      <iframe v-if="tool.video_tuto" width="560" height="315" :src="videoEmbedLink" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import Difficulity from './difficulty'
import Pricing from './pricing'
import WindowsIcon from 'vue-material-design-icons/windows'
import MacIcon from 'vue-material-design-icons/apple-finder'
import LinuxIcon from 'vue-material-design-icons/linux'
import AndroidIcon from 'vue-material-design-icons/android'
import IOSIcon from 'vue-material-design-icons/apple-ios'
import WebIcon from 'vue-material-design-icons/web'

export default {
  name: 'tool-details',
  props: ['tool'],
  components: {
    'skill-level': Difficulity,
    'pricing': Pricing,
    'windows-icon': WindowsIcon,
    'mac-icon': MacIcon,
    'linux-icon': LinuxIcon,
    'android-icon': AndroidIcon,
    'ios-icon': IOSIcon,
    'web-icon': WebIcon
  },
  computed: {
    videoEmbedLink: function () {
      return this.tool.video_tuto.replace('watch?v=', 'embed/')
    }
  }
}
</script>