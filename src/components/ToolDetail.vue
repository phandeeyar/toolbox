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
        <p><strong>Difficulty</strong> : {{ tool.skill_level }}</p>
        <p><strong>Pricing</strong> : {{ tool.pricing }}</p>
        <p><strong>Platform</strong> : </p>
      </div>
    </div>
    <div class="col-md-9">
      <h1>{{ tool.tools_name }}</h1>
      <p><strong>Type</strong> : <a href="#">{{ tool.category }}</a></p>
      <p><strong>Use Cases</strong> : {{ tool.use_cases }}</p>
      <p><strong>Review</strong> : {{ tool.burmese_review }}</p>
      <p><strong>Pros</strong> : {{ tool.pros }} </p>
      <p><strong>Cons</strong> : {{ tool.cons }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tool-details',
  props: ['tool']
}
</script>