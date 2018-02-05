<template>
  <div class="row tool-details" v-if="tool">
    <div class="col-md-12 tool-bar">
      <router-link
          class="btn btn-primary"
          v-if="$routerHistory.hasHistory()"
          :to="{ path: $routerHistory.previous().path }">
          <back-arrow/> Back
      </router-link>
      <router-link 
        v-else
        class="btn btn-primary" 
        :to="{ name: 'toollist'}">
        <back-arrow/> View All Tools
      </router-link>
      <platforms :tool="tool" type="download_btn" class="tool_download_button" v-if="tool.resource_type !== 'curriculum'"/>
    </div>
    <div class="col-md-3 left-column">
      <div class="tool-logo-wrapper">
        <img v-if="tool.logo_img" :src="tool.logo_img" :alt="tool.tools_name" width="100%" class="tool-logo">
        <img v-else src="../assets/images/toolbox_default.png" width="100%" alt="Default Image" class="tool-logo">
      </div>
      <h1 class="tool-name">{{ tool.tools_name }}</h1>
      <div class="tool-info text_center">
        <div class="prop-wrapper">
          <pricing :pricing="tool.pricing" v-if="tool.pricing"/>
          <span class="badge badge-pill badge-success" v-if="tool.opensource_yes">Opensourced</span>
          <span class="badge badge-pill badge-secondary" v-if="tool.unicode_support">Myanmar Unicode Support</span>
        </div>
        <div class="prop-wrapper">
          <span class="prop-label">Category</span> 
          <p>
            <router-link :to="{ name: 'category', params: { categorySlug: tool.category }}">
              {{ tool.category }}
            </router-link>
          </p>
        </div>
        <div class="prop-wrapper">
          <span class="prop-label">Type</span>
          <p>
            {{ tool.type_of_tools }}  
          </p>
        </div>
        <div class="prop-wrapper" v-if="tool.skill_level">
          <span class="prop-label">Skill Level</span> 
          <p>
            <skill-level :level=tool.skill_level />
          </p>
        </div>
        <div class="prop-wrapper" v-if="tool.resource_type !== 'curriculum'">
          <span class="prop-label">Platforms</span>
          <p>
            <platforms :tool="tool" type="icons"/>  
          </p> 
        </div>
      </div>
    </div>
    <div class="col-md-9 right-column">
      <h1 class="tool-name">{{ tool.tools_name }}</h1>
      <div class="prop-wrapper use_case" v-if="tool.use_cases">
        {{ tool.use_cases }}
      </div>
      <div class="prop-wrapper pros" v-if="tool.pros">
        <span class="prop-label"><thumb-up-icon/> Pros</span> 
        <p>{{ tool.pros }}</p>
      </div>
      <div class="prop-wrapper cons" v-if="tool.cons">
        <span class="prop-label"><thumb-down-icon/> Cons</span> 
        <p>{{ tool.cons }}</p>
      </div>
      <div class="prop-wrapper review" v-if="tool.burmese_review">
        <span class="prop-label"><forum-icon/> Review</span> 
        <p>{{ tool.burmese_review }}</p>
      </div>
      <div class="prop-wrapper tutorials" v-if="tool.tutorial_link">
        <span class="prop-label"><tuts-icon/> Tutorials</span>
        <p>
          <a :href="tool.tutorial_link" class="btn btn-success" v-if="tool.resource_type === 'curriculum'">Get Curriculum</a>    
          <a :href="tool.tutorial_link" class="btn btn-success" v-else>Read Tutorial</a>    
        </p>
        <div class="video_wrapper">
          <iframe v-if="tool.video_tuto" width="560" height="315" :src="videoEmbedLink" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Difficulity from './difficulty'
import Pricing from './pricing'
import Platforms from './platforms'
import BackArrow from 'vue-material-design-icons/chevron-left'
import ForumIcon from 'vue-material-design-icons/forum'
import ThumbUpIcon from 'vue-material-design-icons/thumb-up'
import ThumbDownIcon from 'vue-material-design-icons/thumb-down'
import TutorialIcon from 'vue-material-design-icons/file-document-box'

export default {
  name: 'tool-details',
  props: ['tool'],
  components: {
    'skill-level': Difficulity,
    'pricing': Pricing,
    'platforms': Platforms,
    'back-arrow': BackArrow,
    'forum-icon': ForumIcon,
    'thumb-up-icon': ThumbUpIcon,
    'thumb-down-icon': ThumbDownIcon,
    'tuts-icon': TutorialIcon
  },
  computed: {
    videoEmbedLink: function () {
      return this.tool.video_tuto.replace('watch?v=', 'embed/')
    },
    supportUnicode: function () {
      if (this.tool.unicode_support === 'y') {
        return true
      }
      return false
    },
    openSourced: function () {
      if (this.tool.opensource_yes === 'y') {
        return true
      }
      return false
    }
  }
}
</script>