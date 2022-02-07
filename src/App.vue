<template>
    <div class="deco-outer">
      <div class="deco-inner"></div>
      <!-- Sortable view page -->
      <sortable-view />
      <!-- Notifications -->
      <NotificationErrors />
    </div>
</template>
<script>
// Imports
import SortableView from '@/views/SortablePostList/SortablePostList.vue'
import NotificationErrors from '@/components/sharedComponents/NotificationErrors'
export default {
  name: 'App',
  components: {
    SortableView,
    NotificationErrors
  }
}
</script>
<!-- Main css entry point -->
<style lang="scss">
  @import '@/styles/main.scss';
</style>
