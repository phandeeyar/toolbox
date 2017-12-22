<template>
  <div class="platform-wrapper">
    <a :href="tool.window" v-if="tool.window"><windows-icon/></a>
    <a :href="tool.mac" v-if="tool.mac"><mac-icon/></a>
    <a :href="tool.linux" v-if="tool.linux"><linux-icon/></a>
    <a :href="tool.android" v-if="tool.android"><android-icon/></a>
    <a :href="tool.ios" v-if="tool.ios"><ios-icon/></a>
    <a :href="tool.web" v-if="tool.web"><web-icon/></a>  
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
  props: ['tool'],
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

