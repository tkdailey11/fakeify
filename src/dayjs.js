import dayjs from 'dayjs'

// Add any plugins you want to use with Day.js
import dayOfYear from 'dayjs/plugin/dayOfYear'

// Extend dayjs
dayjs.extend(dayOfYear)

export default dayjs
