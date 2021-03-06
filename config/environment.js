/* jshint node: true */

module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'biblio-lourdes',
		environment: environment,
		rootURL: '/',
		locationType: 'auto',
		moment: {
			outputFormat: 'LL',
			allowEmpty: true, // default: false
      defaultFormat: 'DD.MM.YYYY',
      includeLocales: true
		},
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
			moment: {
				outputFormat: 'L',
				// To cherry-pick specific locale support into your application.
				// Full list of locales: https://github.com/moment/moment/tree/2.10.3/locale
				allowEmpty: true, // default: false
				defaultFormat: 'DD.MM.YYYY',
				includeLocales: true
			}
		}
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {

	}

	return ENV;
};