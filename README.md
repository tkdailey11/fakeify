## Fake data generator [![Build Status](https://travis-ci.org/boo1ean/casual.svg?branch=master)](https://travis-ci.org/boo1ean/casual)

## Installation

> npm install fakeify

## Usage

```javascript
var fakeify = require('fakeify');

// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism
var sentence = fakeify.sentence;

// Generate random city name
var city = fakeify.city;

// Define custom generator
fakeify.define('point', function() {
	return {
		x: Math.random(),
		y: Math.random()
	};
});

// Generate random point
var point = fakeify.point;

// And so on..
```

Fakeify uses javascript properties for common generators so you don't need to use function call operator

## Embedded generators

```javascript

// Address

fakeify.country              // 'United Kingdom'
fakeify.city                 // 'New Ortiz chester'
fakeify.zip(digits = {5, 9}) // '26995-7979' (if no digits specified then random selection between ZIP and ZIP+4)
fakeify.street               // 'Jadyn Islands'
fakeify.address              // '6390 Tremblay Pines Suite 784'
fakeify.address1             // '8417 Veda Circles'
fakeify.address2             // 'Suite 648'
fakeify.state                // 'Michigan'
fakeify.state_abbr           // 'CO'
fakeify.latitude             // 90.0610
fakeify.longitude            // 180.0778
fakeify.building_number      // 2413

// Text

fakeify.sentence               // 'Laborum eius porro consequatur.'
fakeify.sentences(n = 3)       // 'Dolorum fuga nobis sit natus consequatur. Laboriosam sapiente. Natus quos ut.'
fakeify.title                  // 'Systematic nobis'
fakeify.text                   // 'Nemo tempore natus non accusamus eos placeat nesciunt. et fugit ut odio nisi dolore non ... (long text)'
fakeify.description            // 'Vel et rerum nostrum quia. Dolorum fuga nobis sit natus consequatur.'
fakeify.short_description      // 'Qui iste similique iusto.'
fakeify.string                 // 'saepe quia molestias voluptates et'
fakeify.word                   // 'voluptatem'
fakeify.words(n = 7)           // 'sed quis ut beatae id adipisci aut'
fakeify.array_of_words(n = 7)  // [ 'voluptas', 'atque', 'vitae', 'vel', 'dolor', 'saepe', 'ut' ]
fakeify.letter                 // 'k'

// Internet

fakeify.ip           // '21.44.122.149'
fakeify.domain       // 'darrion.us'
fakeify.url          // 'http://www.Germaine.net/'
fakeify.email        // 'Josue.Hessel@claire.us'
fakeify.user_agent   // 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0'

// Person

fakeify.name            // 'Alberto'
fakeify.username        // 'Darryl'
fakeify.first_name      // 'Derek'
fakeify.last_name       // 'Considine'
fakeify.full_name       // 'Kadin Torphy'
fakeify.password        // '(205)580-1350Schumm'
fakeify.name_prefix     // 'Miss'
fakeify.name_suffix     // 'Jr.'
fakeify.company_name    // 'Cole, Wuckert and Strosin'
fakeify.company_suffix  // 'Inc'
fakeify.catch_phrase    // 'Synchronised optimal concept'
fakeify.phone           // '982-790-2592'

// Numbers

fakeify.random                            // 0.7171590146608651 (core generator)
fakeify.integer(from = -1000, to = 1000)  // 632
fakeify.double(from = -1000, to = 1000)   // -234.12987444
fakeify.array_of_digits(n = 7)            // [ 4, 8, 3, 1, 7, 6, 6 ]
fakeify.array_of_integers(n = 7)          // [ -105, -7, -532, -596, -430, -957, -234 ]
fakeify.array_of_doubles(n = 7)           // [ -866.3755785673857, -166.62194719538093, ...]
fakeify.coin_flip                         // true

// Date

fakeify.unix_time                    // 659897901
fakeify.moment                       // moment.js object see http://momentjs.com/docs/
fakeify.date(format = 'YYYY-MM-DD')  // '2001-07-06' (see available formatters http://momentjs.com/docs/#/parsing/string-format/)
fakeify.time(format = 'HH:mm:ss')    // '03:08:02' (see available formatters http://momentjs.com/docs/#/parsing/string-format/)
fakeify.century                      // 'IV'
fakeify.am_pm                        // 'am'
fakeify.day_of_year                  // 323
fakeify.day_of_month                 // 9
fakeify.day_of_week                  // 4
fakeify.month_number                 // 9
fakeify.month_name                   // 'March'
fakeify.year                         // 1990
fakeify.timezone                     // 'America/Miquelon'

// Payments

fakeify.card_type            // 'American Express'
fakeify.card_number(vendor)  // '4716506247152101' (if no vendor specified then random)
fakeify.card_exp             // '03/04'
fakeify.card_data            // { type: 'MasterCard', number: '5307558778577046', exp: '04/88', holder_name: 'Jaron Gibson' }

// Misc

fakeify.country_code    // 'ES'
fakeify.language_code   // 'ru'
fakeify.locale          // 'hi_IN'
fakeify.currency        // { symbol: 'R', name: 'South African Rand', symbol_native: 'R', decimal_digits: 2, rounding: 0, code: 'ZAR', name_plural: 'South African rand' }		
fakeify.currency_code   // 'TRY'
fakeify.currency_symbol // 'TL'
fakeify.currency_name   // Turkish Lira
fakeify.mime_type       // 'audio/mpeg'
fakeify.file_extension  // 'rtf'
fakeify.boolean         // true
fakeify.uuid            // '2f4dc6ba-bd25-4e66-b369-43a13e0cf150'

// Colors

fakeify.color_name       // 'DarkOliveGreen'
fakeify.safe_color_name  // 'maroon'
fakeify.rgb_hex          // '#2e4e1f'
fakeify.rgb_array        // [ 194, 193, 166 ]
```

## Define custom generators

```javascript
fakeify.define('user', function() {
	return {
		email: fakeify.email,
		firstname: fakeify.first_name,
		lastname: fakeify.last_name,
		password: fakeify.password
	};
});

// Generate object with randomly generated fields
var user = fakeify.user;
```

If you want to pass some params to your generator:

```javascript
fakeify.define('profile', function(type) {
	return {
		title: fakeify.title,
		description: fakeify.description,
		type: type || 'private'
	};
});

// Generate object with random data
var profile = fakeify.profile('public');
```

NOTE: if getter function has non-empty arguments list then generator should be called as function `fakeify.profile('public')`,
otherwise it should be accessed as property `fakeify.profile`.

## Localization

You can get localized version of fakeify generator:

```javascript
var fakeify = require('fakeify').ru_RU;
fakeify.street; // 'Бухарестская'
```

Default locale is `en_US`.

See [src/providers/{{locale}}](https://github.com/tkdailey11/fakeify/blob/master/locales.md) for more details about available locales and locale specific generators.

If you don't find necessary locale, please create an issue or just [add it](#contributing) :)

## Helpers

#### random_element

Get random array element

```javascript
var item = fakeify.random_element(['ball', 'clock', 'table']);
```

#### random_value

Extract random object value

```javascript
var val = fakeify.random_value({ a: 1, b: 3, c: 42 });
// val will be equal 1 or 3 or 42
```

#### random_key

Extract random object key

```javascript
var val = fakeify.random_key({ a: 1, b: 3, c: 42 });
// val will be equal 'a' or 'b' or 'c'
```

#### populate

Replace placeholders with generators results

```javascript
fakeify.populate('{{email}} {{first_name}}');
// 'Dallin.Konopelski@yahoo.com Lyla'
```

#### populate_one_of

Pick random element from given array and populate it

```javascript
var formats = ['{{first_name}}', '{{last_name}} {{city}}'];
fakeify.populate_one_of(formats);

// Same as

fakeify.populate(fakeify.random_element(formats));
```

#### numerify

Replace all `#` in string with digits

```javascript
var format = '(##)-00-###-##';
fakeify.numerify(format); // '(10)-00-843-32'
```

#### define

[See custom generators](#define-custom-generators)

#### register_provider

Register generators provider

```javascript
var words = ['flexible', 'great', 'ok', 'good'];
var doge_provider = {
	such: function() {
		return 'such ' + fakeify.random_element(words);
	},

	doge_phrase: function() {
		return 'wow ' + fakeify.such();
	}
};

fakeify.register_provider(doge_provider);

fakeify.such;        // 'such good'
fakeify.doge_phrase; // 'wow such flexible'
```

## Seeding

If you want to use a specific seed in order to get a repeatable random sequence:

```javascript
fakeify.seed(123);
```

It uses [Mersenne Twister](https://github.com/boo1ean/mersenne-twister) pseudorandom number generator in core.

## Generators functions

If you want to pass generator as a callback somewhere or just hate properties you always can access generator **function** at `fakeify._{generator}`

```javascript
// Generate value using function
var title = fakeify._title();
// Same as
var title = fakeify.title;

// Pass generator as callback
var array_of = function(times, generator) {
	var result = [];

	for (var i = 0; i < times; ++i) {
		result.push(generator());
	}

	return result;
};

// Will generate array of five random timestamps
var array_of_timestamps = array_of(5, fakeify._unix_time);
```

Or you can get functional version of fakeify generator:

```javascript
var fakeify = require('fakeify').functions();

// Generate title
fakeify.title();

// Generate timestamp
fakeify.unix_time();
```

## View providers output cli

There is a simple cli util which could be used to view/debug providers output:

	# Will render table with columns [generator_name, result] for all providers
	node utils/show.js

	 # Will render table with columns [generator_name, result] only for person provider
	node utils/show.js person

## Browserify support

Currently you can't use fakeify with browserify. Please check out this browserify-friendly fork [Klowner/casual-browserify](https://github.com/Klowner/casual-browserify)

## Contributing

- [Adding new locale](https://github.com/tkdailey11/fakeify/blob/master/locales.md)
- 
