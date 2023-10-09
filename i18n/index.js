var en = require('./translations.en.json')
var es = require('./translations.es.json')
var br = require('./translations.br.json')
var fr = require('./translations.fr.json')
var fi = require('./translations.fi.json')
var ch = require('./translations.ch.json')

const i18n = {
  translations: {
    en,
    es,
    br,
    fr,
    fi,
    ch,
  },
  defaultLang: 'en',
  useBrowserDefault: true,
}

module.exports = i18n
