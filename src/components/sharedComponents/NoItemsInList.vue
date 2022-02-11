<template>
  <transition name="fadeout">
    <div class="flex justify-center items-center">
      <div class="font-bold h-56 grid grid-cols-1 content-center">
        <!-- Watch svg animation -->
        <WatchLoading />
        <p class="text-black text-center">No actions commited yet!</p>
      </div>
    </div>
  </transition>
</template>
<script>
import WatchLoading from '@/components/sharedComponents/Loader'
export default {
  name: 'NoItemsInList',
  components: {
    WatchLoading
  }
}
</script>

<style scoped>

</style>
