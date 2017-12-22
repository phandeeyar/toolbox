<template>
  <div class="row tool-details">
    <div class="col-md-12 tool-bar">
      <router-link class="btn btn-primary" :to="{ name: 'toollist'}"><back-arrow/> Back</router-link>
    </div>
    <div class="col-md-3">
      <div class="tool-logo-wrapper">
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
          <platforms :tool="tool"/>
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
      <div class="prop-wrapper">
        <span class="prop-label">Type</span> : <a href="#">{{ tool.category }}</a>
      </div>
      <div class="prop-wrapper" v-if="tool.use_cases">
        {{ tool.use_cases }}
      </div>
      <div class="prop-wrapper" v-if="tool.burmese_review">
        <span class="prop-label">Review</span> : {{ tool.burmese_review }}
      </div>
      <div class="prop-wrapper" v-if="tool.pros">
        <span class="prop-label">Pros</span> : {{ tool.pros }}
      </div>
      <div class="prop-wrapper" v-if="tool.cons">
        <span class="prop-label">Cons</span> : {{ tool.cons }}
      </div>
      <div class="prop-wrapper" v-if="tool.tutorial_link">
        <a :href="tool.tutorial_link" class="btn btn-success">Read Tutorial</a>  
      </div>
      <iframe v-if="tool.video_tuto" width="560" height="315" :src="videoEmbedLink" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import Difficulity from './difficulty'
import Pricing from './pricing'
import Platforms from './platforms'
import BackArrow from 'vue-material-design-icons/chevron-left'

export default {
  name: 'tool-details',
  props: ['tool'],
  components: {
    'skill-level': Difficulity,
    'pricing': Pricing,
    'platforms': Platforms,
    'back-arrow': BackArrow
  },
  computed: {
    videoEmbedLink: function () {
      return this.tool.video_tuto.replace('watch?v=', 'embed/')
    }
  }
}
</script>