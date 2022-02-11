<template>
  <transition-group tag="ul" class="list" name="the-list">
    <li class="flex justify-between p-2 rounded" v-for="(post, index) in postList" :key="post.id">
      <span class="flex items-center">Post {{ post.id }}</span>
      <!-- Arrows -->
      <div class="arrows">
        <!--Arrow up -->
        <div class="arrow-up" v-if="index > 0"
             @click="$root.$emit('move-arrow',{currentPostId: post.id, fromIndex: index, toIndex: index-1})"></div>
        <!-- Arrow down -->
        <div class="arrow-down" v-if="index < postList.length-1"
             @click="$root.$emit('move-arrow',{currentPostId: post.id, fromIndex: index, toIndex: index+1})"></div>
      </div>
    </li>
  </transition-group>
</template>

<script>
export default {
  name: 'arrowMover',
  props: {
    postList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
