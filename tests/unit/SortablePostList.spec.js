import { shallowMount, mount } from '@vue/test-utils'
import SortablePostList from '@/views/SortablePostList/SortablePostList'

describe('/views/SortablePostList/SortablePostList.vue', () => {
  test('Check if H1 title text is equal to "Sortable Post List" =>', () => {
    const wrapper = mount(SortablePostList, {
    })
    const h1 = wrapper.find('h1');
    expect(h1.text()).toBe('Sortable Post List')
  })

})
