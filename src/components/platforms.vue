<template>
  <div class="platform-wrapper">
    <span v-if="type === 'icons'">
      <a :href="tool.window" v-if="tool.window"><windows-icon/></a>
      <a :href="tool.mac" v-if="tool.mac"><mac-icon/></a>
      <a :href="tool.linux" v-if="tool.linux"><linux-icon/></a>
      <a :href="tool.android" v-if="tool.android"><android-icon/></a>
      <a :href="tool.ios" v-if="tool.ios"><ios-icon/></a>
      <a :href="tool.web" v-if="tool.web"><web-icon/></a>    
    </span>
    <b-dropdown v-if="type === 'download_btn'" text="Download" class="m-md-2" variant="success">
        <b-dropdown-item v-if="tool.window" :href="tool.window">
          <windows-icon/> Windows
        </b-dropdown-item>
        <b-dropdown-item v-if="tool.mac" :href="tool.mac">
          <mac-icon/> Mac
        </b-dropdown-item>
        <b-dropdown-item v-if="tool.linux" :href="tool.linux">
          <linux-icon/> Linux
        </b-dropdown-item>
        <b-dropdown-item v-if="tool.android" :href="tool.android">
          <android-icon/> Android
        </b-dropdown-item>
        <b-dropdown-item v-if="tool.ios" :href="tool.ios">
          <ios-icon/> iOS
        </b-dropdown-item>
        <b-dropdown-item v-if="tool.web" :href="tool.web">
          <web-icon/> Web
        </b-dropdown-item>
    </b-dropdown>
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
  name: 'platforms',
  props: ['tool', 'type'],
  components: {
    'windows-icon': WindowsIcon,
    'mac-icon': MacIcon,
    'linux-icon': LinuxIcon,
    'android-icon': AndroidIcon,
    'ios-icon': IOSIcon,
    'web-icon': WebIcon
  }
}
</script>

