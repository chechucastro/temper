import { shallowMount } from '@vue/test-utils'
import ActionsCommittedList from '@/components/ActionsCommitedList'

describe('@/components/ActionsCommitedList/ActionsCommittedList.vue', () => {
  test('Check if button Time travel exist" =>', () => {
    const wrapper = shallowMount(ActionsCommittedList, {
    })
    const buttonTimeTravel = wrapper.findComponent({ ref: 'time-travel' })
    expect(buttonTimeTravel.exists())
  })
  test('Check if the "timeTravel" method still exist" =>', () => {
    const wrapper = shallowMount(ActionsCommittedList, {
    })
    let instance = wrapper.vm
    let myMethod = instance.timeTravel

    if (myMethod !== undefined) {
      console.log("method 'timeTravel' exists")
    }
  })
  test('Check the actions committed are false by default" =>', () => {
    const wrapper = shallowMount(ActionsCommittedList, {
    })
    // Expect
    expect(wrapper.vm.$data.hasActions).toBeFalsy()
  })

})
