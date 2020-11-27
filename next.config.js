const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  // de: 'german',
  // en: 'eng'
  en: 'en',
  fr: 'fr'
}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}