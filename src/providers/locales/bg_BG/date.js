import {locale, unix} from 'moment'

var provider = {
  moment: function () {
    locale('bg')
    return unix(this.unix_time)
  }
}

export default provider
