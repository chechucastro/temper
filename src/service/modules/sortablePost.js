import Queries from '../../queries/queries'
import { EventBus } from '@/declarations/eventBus'
import axios from 'axios'
/**
 * Get post list
 * @returns {promise}
*/
export const SortablePost = {
  methods: {
    async getSortablePost () {
      try {
        const response = await axios.get(Queries.sortablePosts.posts)
        return response.data
      } catch (error) {
        // For example here I could check for any error
        if (error.response.status !== 200) {
          // Here I can manage the error with a tooltip, notification or similar
          EventBus.notification(error.response.status)
          return error.response
        }
      }
    }
  }
}
