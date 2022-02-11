<template>
  <transition-group tag="ul" class="divide-y-2 divide-gray-100 actions" name="fade">
    <li class="flex justify-between p-3 bg-white" v-for="(action, index) in actionList" :key="index">
      <span class="flex items-center">Moved post {{ action.currentPostId }} from index {{ action.fromIndex }} to index {{ action.toIndex }}</span>
      <span class="actions">
          <button ref="time-travel" class="time-travel rounded py-2 px-4 text-black" @click="$root.$emit('time-travel', {currentIndex: index, currentAction: action})">Time travel</button>
        </span>
    </li>
  </transition-group>
</template>

<script>
export default {
  name: 'ActionsItems',
  props: {
    actionList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
