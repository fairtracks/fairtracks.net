// TODO: Move common code to tests/setup.js ?

import Vue from 'vue'
import Vuetify from 'vuetify'

import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import LogoLink from '~/components/ui/LogoLink.vue'

Vue.use(Vuetify)

const factory = () => {
  return shallowMount(LogoLink, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })
}

describe('LogoLink', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
