import number from './providers/number'

var array_of = function (times, generator) {
  var result = []

  for (var i = 0; i < times; ++i) {
    result.push(generator())
  }

  return result
}

var random_element = function (array) {
  var index = this.integer(0, array.length - 1)
  return array[index]
}

var random_key = function (object) {
  var keys = Object.keys(object)
  return this.random_element(keys)
}

var random_value = function (object) {
  return object[this.random_key(object)]
}

var register_provider = function (provider) {
  for (var i in provider) {
    this.define(i, provider[i])
  }
}

var extend = function (a, b) {
  for (var i in b) {
    a[i] = b[i]
  }

  return a
}

var define = function (name, generator) {
  if (typeof generator != 'function') {
    this[name] = generator
    return
  }

  if (generator.length) {
    this[name] = generator.bind(this)
  } else {
    Object.defineProperty(this, name, {
      get: generator,
      configurable: true
    })
  }

  this['_' + name] = generator.bind(this)
}

var numerify = function (format) {
  return format.replace(/#/g, this._digit)
}

var letterify = function (format) {
  return format.replace(/X/g, this._letter)
}

var join = function () {
  var tokens = Array.prototype.slice.apply(arguments)
  return tokens.filter(Boolean).join(' ')
}

var populate = function (format) {
  var fakeify = this
  return format.replace(/\{\{(.+?)\}\}/g, function (match, generator) {
    return fakeify['_' + generator]()
  })
}

var populate_one_of = function (formats) {
  return this.populate(this.random_element(formats))
}

export const array_of = array_of
export const random_element = random_element
export const random_value = random_value
export const random_key = random_key
export const register_provider = register_provider
export const extend = extend
export const define = define
export const numerify = numerify
export const letterify = letterify
export const join = join
export const populate = populate
export const populate_one_of = populate_one_of
