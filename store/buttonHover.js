const NAMESPACE = 'buttonHover/'

export const M_SET_ID = 'setId'

export const BUTTON_HOVER_M_SET_ID = NAMESPACE + M_SET_ID

export const state = () => ({
  buttonHoverId: '',
})

export const mutations = {
  [M_SET_ID]: (state, id) => {
    state.buttonHoverId = id
  },
}
