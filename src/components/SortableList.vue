<template>
  <div>
    <transition-group tag="ul" class="list" name="the-list" v-if="postList.length">
      <li class="flex justify-between p-2 rounded" v-for="(post, index) in postList" :key="post.id">
        <span class="flex items-center">{{index }} - Post {{ post.id }}</span>
        <!-- Arrows -->
        <div class="arrows">
          <!--Arrow up -->
          <div class="arrow-up" v-if="index > 0"
               @click="arrayMover({currentPostId: post.id, fromIndex: index, toIndex: index-1})"></div>
          <!-- Arrow down -->
          <div class="arrow-down" v-if="index < postList.length-1"
               @click="arrayMover({currentPostId: post.id, fromIndex: index, toIndex: index+1})"></div>
        </div>
      </li>
    </transition-group>
  </div>
</template>
<script>
import { EventBus } from '@/declarations/eventBus'
import { Services } from '@/service/Services'
export default {
  name: 'SortablePostList',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getPostList () {
      Services.getSortablePost().then((posts) => {
        console.log(posts)
        this.posts = posts
      })
    },
    arrayMover (params, isRewind = false) {
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
      // It could be done with slice if we care about a "non consecutive" id's (here id's are from 1 to 100)
      // Ex: this.posts.slice(0, 5)
      return this.posts.filter(post => post.id < 6)
    }
  },
  created () {
    this.getPostList()
    EventBus.$on('rewindAction', (payload) => {
      this.arrayMover(payload, true)
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
