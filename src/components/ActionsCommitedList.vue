<template>
  <div>
    <component :is="changeComponent" :actionList="actionList"/>
  </div>
</template>
<script>
import ActionsItems from '@/components/sharedComponents/ActionsItems'
import NoItemsInList from '@/components/sharedComponents/NoItemsInList'
import { EventBus } from '@/declarations/eventBus'
export default {
  name: 'ActionsCommittedList',
  components: {
    ActionsItems,
    NoItemsInList
  },
  data () {
    return {
      hasActions: false,
      actionList: [],
      component: 'NoItemsInList'
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
  },
  computed: {
    changeComponent () {
      return (this.actionList.length) ? 'ActionsItems' : 'NoItemsInList'
    }
  },
  mounted () {
    this.$root.$on('time-travel', (payload) => {
      this.timeTravel(payload)
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
