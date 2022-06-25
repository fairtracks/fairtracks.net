// import { getMatchedComponents } from './utils'
//

import goTo from 'vuetify/lib/services/goto'

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

function _scrollTo(to, _from, savedPosition) {
  let position = false

  const scrollMarginTop = Number(
    getComputedStyle(document.body)['scroll-margin-top']?.replace('px', '')
  )

  const nuxt = window.$nuxt
  nuxt.$nextTick(() => nuxt.$emit('triggerScroll'))

  // wait for the out transition to complete (if necessary)
  nuxt.$once('triggerScroll', async () => {
    // coords will be used if no selector is provided,
    // or if the selector didn't match any element.

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
      let yPos = position.y
      if (scrollMarginTop) {
        yPos += scrollMarginTop
      }
      // console.log(`Scrolling to y=${yPos}, ignoring x...`)
      goTo(yPos, { duration: 0 })
      // window.scrollTo(position.x, position.y)
    } else if (typeof position.selector !== 'undefined') {
      // console.log(`Scrolling to y=${position}...`)
      document
        .getElementById(position.selector.substring(1))
        .scrollIntoView({ block: 'start', inline: 'nearest' })
      // Respect any scroll-margin-top set in CSS when scrolling to anchor
      if (scrollMarginTop) {
        window.scrollBy(0, -scrollMarginTop)
      }
    }

    return position
  })
}

export default function scrollBehavior(to, from, savedPosition) {
  // const isRouteChanged = to.path !== from.path || to.hash !== from.hash
  // const differentPage = to.path !== from?.path
  const samePageDifferentHash = to.path === from?.path && to.hash !== from?.hash
  // console.log(isRouteChanged, differentPage, samePageDifferentHash)

  if (samePageDifferentHash) {
    return _scrollTo(to, from, savedPosition)
  } else {
    if (savedPosition) {
      // A bit of a hack. Not able to get access to vuex store from here.
      to.meta.savedPosition = savedPosition
    }
    return false
  }
}

export function manualScrollTo(to, from, scrollPosition) {
  if (to.meta?.savedPosition) {
    scrollPosition = to.meta.savedPosition
    delete to.meta.savedPosition
  }
  _scrollTo(to, from, scrollPosition)
}
