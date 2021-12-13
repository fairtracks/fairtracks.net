export const state = () => ({
  buttonHoverId: '',
})

export const mutations = {
  setButtonHoverId(state, id) {
    state.buttonHoverId = id
  },
}
