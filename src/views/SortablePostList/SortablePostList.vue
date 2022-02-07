<template>
  <div class="relative grid md:grid-cols-2 gap-10 p-5 -top-20">
    <div>
      <h1 class="text-2xl font-bold text-white ml-8">Sortable Post List</h1>
        <div class="w-full transparent">
          <!-- Sortable Post List component -->
          <SortablePostList />
        </div>
    </div>
    <div class="transparent shadow pb-8">
      <h3 class="text-2xl font-bold mb-4 mt-0 bg-white p-4 rounded">List of actions commited</h3>
      <div class=" bg-white rounded-lg shadow-lg ml-6 mr-6">
        <!-- Actions Commited list component -->
        <ActionsCommitedList />
      </div>
    </div>
  </div>
</template>
<script>
// Component imports
import SortablePostList from '@/components/SortableList.vue'
import ActionsCommitedList from '@/components/ActionsCommitedList'
export default {
  name: 'SortablePost',
  components: {
    SortablePostList,
    ActionsCommitedList
  }
}
</script>
<style lang="scss">
  @import '@/styles/components/SortablePostList.scss';
</style>
