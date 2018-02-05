<template>
    <div class="tool-logo-wrapper">
      <img v-if="tool.logo_img" :src="tool.logo_img" :alt="tool.tools_name" width="100%" class="tool-logo">
      <img v-else-if="tool.resource_type === 'curriculum'" src="../assets/images/book_default.png" width="100%" alt="Default Image" class="tool-logo">
      <img v-else src="../assets/images/toolbox_default.png" width="100%" alt="Default Image" class="tool-logo">
    </div>
</template>

<script>
export default {
  props: ['tool']
}
</script>