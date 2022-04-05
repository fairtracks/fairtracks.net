import goTo from 'vuetify/lib/services/goto'
import { getMatchedComponents, setScrollRestoration } from './utils'

if (process.client) {
  if ('scrollRestoration' in window.history) {
    setScrollRestoration('manual')

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      setScrollRestoration('auto')
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      setScrollRestoration('manual')
    })
  }
}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route)
  if (Pages.length === 1) {
    const { options = {} } = Pages[0]
    return options.scrollToTop !== false
  }
  return Pages.some(({ options }) => options && options.scrollToTop)
}

export default function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false
  const isRouteChanged = to !== from
  const differentPage = to.path !== from.path
  const samePageDifferentHash = to.path === from.path && to.hash !== from.hash

  const nuxt = window.$nuxt

  if (
    // Initial load (vuejs/vue-router#3199)
    !isRouteChanged ||
    // Route hash changes
    samePageDifferentHash
  ) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'))
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (differentPage && shouldScrollToTop(to)) {
        window.scrollTo(0, 0)
      }

      if (savedPosition) {
        // savedPosition is only available for popstate navigations (back button)
        position = { x: savedPosition.x, y: savedPosition.y + 64 }
      } else if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substring(1))
        }
        try {
          const element = document.querySelector(hash)
          if (element) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash,
            }
          }
        } catch (e) {
          console.warn(
            'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
          )
        }
      } else {
        position = { x: 0, y: 0 }
      }

      if (typeof position.y !== 'undefined') {
        goTo(position.y)
      } else if (typeof position.selector !== 'undefined') {
        goTo(position.selector)
      }

      resolve(position)
    })
  })
}
