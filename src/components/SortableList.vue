<template>
  <div>
    <ArrowMover :postList="postList" />
  </div>
</template>
<script>
import ArrowMover from '@/components/sharedComponents/ArrowMover'
import { EventBus } from '@/declarations/eventBus'
import { Services } from '@/service/Services'
export default {
  name: 'SortablePostList',
  components: {
    ArrowMover
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getPostList () {
      Services.getSortablePost().then((posts) => {
        this.posts = posts
      })
    },
    arrayMover (params, isRewind = false) {
      console.log(params)
      const arr = this.posts
      const { currentPostId, fromIndex, toIndex } = params
      const payload = { currentPostId, fromIndex, toIndex }
      const element = arr[fromIndex]
      arr.splice(fromIndex, 1) // From
      arr.splice(toIndex, 0, element) // To
      if (!isRewind) EventBus.sendToCommittedList(payload)
    }
  },
  computed: {
    postList () {
      // 1. Display the first 5 posts
      return this.posts.filter(post => post.id < 6)
    }
  },
  created () {
    this.getPostList()
    EventBus.$on('rewindAction', (payload) => {
      this.arrayMover(payload, true)
    })
  },
  mounted () {
    this.$root.$on('move-arrow', (payload) => {
      this.arrayMover(payload)
    })
  }
}
</script>
<style lang="scss">
  /* base */
  .the-list {
    backface-visibility: hidden;
    z-index: 1;
  }
  /* moving */
  .the-list-move {
    transition: all 600ms ease-in-out 50ms;
  }
    /* appearing */
  .the-list-enter-active {
    transition: all 400ms ease-out;
  }

  /* disappearing */
  .the-list-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  /* appear at / disappear to */
  .the-list-enter,
  .the-list-leave-to {
    opacity: 0;
  }
</style>
