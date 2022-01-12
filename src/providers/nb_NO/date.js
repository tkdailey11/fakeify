import {locale} from 'moment'
locale('nb')

var provider = {
  date: function (format) {
    format = format || 'DD.MM.YYYY'
    return this.moment.format(format)
  }
}

export default provider
