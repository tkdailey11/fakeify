import helpers, {extend} from './helpers'
import {existsSync as exists} from 'fs'

var safe_require = function (filename) {
  if (exists(filename + '.js')) {
    return require(filename)
  }
  return {}
}

var build_fakeify = function () {
  var fakeify = extend({}, helpers)

  fakeify.functions = function () {
    var adapter = {}

    Object.keys(this).forEach(function (name) {
      if (name[0] === '_') {
        adapter[name.slice(1)] = fakeify[name]
      }
    })

    return adapter
  }

  var providers = [
    'address',
    'text',
    'internet',
    'person',
    'number',
    'date',
    'payment',
    'misc',
    'color'
  ]

  fakeify.register_locale = function (locale) {
    fakeify.define(locale, function () {
      var fakeify = build_fakeify()

      providers.forEach(function (provider) {
        fakeify.register_provider(
          extend(
            require('./providers/' + provider),
            safe_require(__dirname + '/providers/' + locale + '/' + provider)
          )
        )
      })

      return fakeify
    })
  }

  var locales = [
    'en_US',
    'ru_RU',
    'uk_UA',
    'nl_NL',
    'en_CA',
    'fr_FR',
    'id_ID',
    'it_CH',
    'it_IT',
    'de_DE',
    'ar_SY',
    'pt_BR',
    'nb_NO',
    'ro_RO',
    'sv_SE',
    'bg_BG',
    'ja_JP',
    'da_DK',
    'cs_CZ'
  ]

  locales.forEach(fakeify.register_locale)

  return fakeify
}

// Default locale is en_US
export default build_fakeify().en_US
