<template>
  <section>
    <DemoSectionsSiteHeader />
    <DemoSectionsAboutUs />
    <DemoSectionsAlternatingSubSections />
    <DemoSectionsBlog />
    <DemoSectionsBrands />
    <DemoSectionsCalloutBlock />
    <DemoSectionsContact />
    <DemoSectionsFeatures />
    <DemoSectionsGallery />
    <DemoSectionsHero />
    <DemoSectionsHeroAlt />
    <DemoSectionsIntro />
    <DemoSectionsPricing />
    <DemoSectionsServices />
    <DemoSectionsTeam />
    <DemoSectionsTestimonials />
    <DemoSectionsTimeline />
    <DemoSectionsFooterTop />
    <DemoSectionsSiteFooter />
  </section>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css',
        },
      ],
    }
  },
}
</script>
