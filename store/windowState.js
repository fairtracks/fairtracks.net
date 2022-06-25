const NAMESPACE = 'windowState/'

export const M_SET_RELOAD_SCROLL_POSITION = 'setReloadScrollPosition'

export const WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION = NAMESPACE + M_SET_RELOAD_SCROLL_POSITION

export const state = () => ({
  reloadScrollPosition: { x: 0, y: 0 },
})

export const mutations = {
  [M_SET_RELOAD_SCROLL_POSITION]: (state, position) => {
    state.reloadScrollPosition = { x: position.x, y: position.y }
  },
}
