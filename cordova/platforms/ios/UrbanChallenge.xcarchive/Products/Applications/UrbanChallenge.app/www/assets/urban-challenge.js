"use strict";



define('urban-challenge/app', ['exports', 'ember', 'urban-challenge/resolver', 'ember-load-initializers', 'urban-challenge/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('urban-challenge/components/cdv-nav-bar', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    tagName: 'header'
  });
});
define('urban-challenge/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('urban-challenge/helpers/app-version', ['exports', 'ember', 'urban-challenge/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('urban-challenge/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('urban-challenge/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('urban-challenge/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'urban-challenge/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('urban-challenge/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('urban-challenge/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('urban-challenge/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('urban-challenge/initializers/export-application-global', ['exports', 'ember', 'urban-challenge/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('urban-challenge/initializers/in-app-livereload', ['exports', 'urban-challenge/config/environment', 'ember-cli-cordova/initializers/in-app-livereload'], function (exports, _environment, _inAppLivereload) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = undefined;
  /* globals cordova */

  var inAppReload = _inAppLivereload.default.initialize;

  var initialize = exports.initialize = function initialize(app) {
    if (typeof cordova === 'undefined' || _environment.default.environment !== 'development' || _environment.default.cordova && (!_environment.default.cordova.liveReload || !_environment.default.cordova.liveReload.enabled)) {
      return;
    }

    return inAppReload(app, _environment.default);
  };

  exports.default = {
    name: 'cordova:in-app-livereload',
    initialize: initialize
  };
});
define('urban-challenge/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('urban-challenge/initializers/store', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('urban-challenge/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("urban-challenge/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('urban-challenge/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('urban-challenge/router', ['exports', 'ember', 'urban-challenge/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('urban-challenge/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('urban-challenge/services/cordova', ['exports', 'ember-cli-cordova/services/cordova'], function (exports, _cordova) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cordova.default.extend({});
});
define("urban-challenge/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "da5nOofq", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Urban Challenge\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"Bienvenue sur le jeu qui déchire.\"],[14],[0,\"\\n\"],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "urban-challenge/templates/application.hbs" } });
});
define("urban-challenge/templates/cdv-generic-nav-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IiHkDcYR", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"nav\",\"leftButton\",\"text\"]]],null,{\"statements\":[[0,\"  \"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"leftButton\"]],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"nav\",\"leftButton\",\"icon\"]]],null,{\"statements\":[[0,\"      \"],[11,\"i\",[]],[16,\"class\",[34,[\"icon \",[28,[\"nav\",\"leftButton\",\"icon\"]]]]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[1,[28,[\"nav\",\"leftButton\",\"text\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"nav\",\"title\",\"text\"]]],null,{\"statements\":[[0,\"  \"],[11,\"h1\",[]],[13],[0,\"\\n    \"],[1,[28,[\"nav\",\"title\",\"text\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"nav\",\"rightButton\",\"text\"]]],null,{\"statements\":[[0,\"  \"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"rightButton\"]],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"nav\",\"rightButton\",\"icon\"]]],null,{\"statements\":[[0,\"      \"],[11,\"i\",[]],[16,\"class\",[34,[\"icon \",[28,[\"nav\",\"rightButton\",\"icon\"]]]]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[1,[28,[\"nav\",\"rightButton\",\"text\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "urban-challenge/templates/cdv-generic-nav-bar.hbs" } });
});
define("urban-challenge/templates/components/cdv-nav-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fL8V+6gk", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "urban-challenge/templates/components/cdv-nav-bar.hbs" } });
});


define('urban-challenge/config/environment', ['ember'], function(Ember) {
  var prefix = 'urban-challenge';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("urban-challenge/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true,"name":"urban-challenge","version":"0.0.0+e100aab8"});
}
//# sourceMappingURL=urban-challenge.map
