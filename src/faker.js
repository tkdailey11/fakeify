var faker = {};
var define = faker.define = function(name, generator) {
	faker.__defineGetter__(name, generator);
};

define('name', require('./generators/name'));
define('firstname', require('./generators/firstname'));
define('lastname', require('./generators/lastname'));
define('email', require('./generators/email'));
define('domain', require('./generators/domain'));
define('title', require('./generators/sentence'));
define('sentence', require('./generators/sentence'));
define('city', require('./generators/city'));
define('text', require('./generators/text'));
define('description', require('./generators/text'));
define('short_description', require('./generators/sentence'));
define('password', require('./generators/password'));

module.exports = faker;
