<template>
  <div>
    <!-- If actions exist -->
    <transition-group tag="ul" class="divide-y-2 divide-gray-100 actions" name="fade" v-if="actionList.length">
      <li class="flex justify-between p-3 bg-white" v-for="(action, index) in actionList" :key="index">
        <span class="flex items-center">Moved post {{ action.currentPostId }} from index {{ action.fromIndex }} to index {{ action.toIndex }}</span>
        <span class="actions">
          <button ref="time-travel" class="time-travel rounded py-2 px-4 text-black" @click="timeTravel({currentIndex: index, currentAction: action})">Time travel</button>
        </span>
      </li>
    </transition-group>
    <!-- No actions showing up -->
    <transition name="fadeout" v-else-if="!hasActions">
      <div class="flex justify-center items-center">
        <div class="font-bold h-56 grid grid-cols-1 content-center">
          <!-- Watch svg animation -->
          <WatchLoading />
          <p class="text-black text-center">No actions commited yet!</p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { EventBus } from '@/declarations/eventBus'
import WatchLoading from '@/components/sharedComponents/Loader'
export default {
  name: 'ActionsCommittedList',
  components: {
    WatchLoading
  },
  data () {
    return {
      component: 'noActions',
      hasActions: false,
      actionList: []
    }
  },
  methods: {
    // 5. Users can click on a “Time Travel” button,
    // which should rewind the order of the posts as it was before that action was taken
    // and then should remove the clicked action card and the action cards above that.
    timeTravel (params) {
      const { currentIndex, currentAction } = params
      this.rewindActionTo(currentAction)
      this.actionList.splice(0, (currentIndex + 1))
    },
    rewindActionTo (currentAction) {
      EventBus.rewindAction(currentAction) // Send this information with the "Actions committed list"
    }
  },
  created () {
    // 4. The actions in the history should be stacked
    // where the oldest action is at the bottom and new ones appear on top.
    EventBus.$on('sendToCommittedList', (payload) => {
      const { currentPostId, fromIndex, toIndex } = payload
      // New actions must be placed on top => unshift it :-)
      this.actionList.unshift({
        currentPostId: currentPostId,
        fromIndex: fromIndex,
        toIndex: toIndex
      })
    })
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fadeout-enter-active, .fadeout-leave-active {
  transition: opacity .8s;
}
.fadeout-enter, .fadeout-leave-to {
  opacity: 0;
}
</style>
