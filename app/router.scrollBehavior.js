// import { getMatchedComponents } from './utils'
//
if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
//
// function shouldScrollToTop(route) {
//   const Pages = getMatchedComponents(route)
//   if (Pages.length === 1) {
//     const { options = {} } = Pages[0]
//     return options.scrollToTop !== false
//   }
//   return Pages.some(({ options }) => options && options.scrollToTop)
// }

export default function scrollBehavior(to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false
  const isRouteChanged = to !== from
  // const differentPage = to.path !== from?.path
  const samePageDifferentHash = to.path === from?.path && to.hash !== from?.hash

  // console.log(isRouteChanged, differentPage, samePageDifferentHash)

  const nuxt = window.$nuxt

  if (
    // Initial load (vuejs/vue-router#3199)
    !isRouteChanged ||
    // Route hash changes
    samePageDifferentHash
  ) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'))
  }

  // wait for the out transition to complete (if necessary)
  nuxt.$once('triggerScroll', async () => {
    // coords will be used if no selector is provided,
    // or if the selector didn't match any element.

    // if (differentPage) {
    //   window.scrollTo(0, 0)
    // }

    if (savedPosition) {
      // savedPosition is only available for popstate navigations (back button)
      position = { x: savedPosition.x, y: savedPosition.y }
    } else if (to.hash) {
      let hash = to.hash
      // CSS.escape() is not supported with IE and Edge.
      if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
        hash = '#' + window.CSS.escape(hash.substring(1))
      }

      try {
        const findEl = (hash, x) => {
          return (
            document.querySelector(hash) ||
            new Promise((resolve) => {
              if (x > 10) {
                return resolve()
              }
              setTimeout(() => {
                resolve(findEl(hash, ++x || 1))
              }, 100)
            })
          )
        }

        const el = await findEl(to.hash, 0)
        if (el) {
          // scroll to anchor by returning the selector
          position = { selector: hash }
          // Respect any scroll-margin-top set in CSS when scrolling to anchor
          const y = Number(getComputedStyle(el)['scroll-margin-top']?.replace('px', ''))
          if (y) {
            position.offset = { y }
          }
        }
      } catch (e) {
        console.warn(
          'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
        )
      }
      // } else if (isRouteChanged && shouldScrollToTop(to)) {
    } else if (isRouteChanged) {
      position = { x: 0, y: 0 }
    }

    if (typeof position.y !== 'undefined') {
      window.scrollTo(position.x, position.y)
    } else if (typeof position.selector !== 'undefined') {
      document.getElementById(position.selector.substring(1)).scrollIntoView(true)
    }

    return position
  })
}
