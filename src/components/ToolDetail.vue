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
        <p><span class="prop-label">Difficulty</span> : <skill-level :level=tool.skill_level /></p>
        <p><span class="prop-label">Pricing</span> : {{ tool.pricing }}</p>
        <p><span class="prop-label">Platform</span> : </p>
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
export default {
  name: 'tool-details',
  props: ['tool'],
  components: {
    'skill-level': Difficulity
  },
  computed: {
    videoEmbedLink: function () {
      return this.tool.video_tuto.replace('watch?v=', 'embed/')
    }
  }
}
</script>