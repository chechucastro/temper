import Vue from 'vue'
// Imports added below
import { SortablePost } from '@/service/modules/sortablePost'

export const Services = new Vue({
  mixins: [
    SortablePost
  ]
})
