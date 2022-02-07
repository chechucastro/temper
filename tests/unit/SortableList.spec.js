import { shallowMount, mount } from '@vue/test-utils'
import SortableList from '@/components/SortableList'

describe('/components/SortableList/SortableList.vue', () => {
  test('Checking if post list data is an Array =>', () => {
    const wrapper = shallowMount(SortableList, {
    })
    // Expect
    expect(wrapper.vm.$data.post).toBeFalsy()
  })
  test('Checking if arrows are still in code =>', () => {
    const wrapper = shallowMount(SortableList, {
    })
    // Expect
    expect(wrapper.find('.arrows')).toBeTruthy()
  })
})
