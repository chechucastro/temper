/**
 * Manager for All the events emitted in the Sortable List app
 */
import Vue from 'vue'
export const EventBus = new Vue({
  methods: {
    // Share the current clicked object to the Committed "list of actions committed"
    sendToCommittedList (payload) {
      this.$emit('sendToCommittedList', payload)
    },
    // Rewind the actions from the "List of actions committed"
    rewindAction (payload) {
      this.$emit('rewindAction', payload)
    },
    // Notification error
    notification (payload) {
      this.$emit('notification', payload)
    }
  }
})
