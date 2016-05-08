"use strict";

System.register([], function (_export, _context) {
    var Configure;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("Configure", Configure = function () {
                function Configure() {
                    _classCallCheck(this, Configure);

                    this._config = {
                        keymap: {}
                    };
                }

                Configure.prototype.options = function options(obj) {
                    Object.assign(this._config, obj);
                };

                Configure.prototype.get = function get(key) {
                    return this._config[key];
                };

                Configure.prototype.set = function set(key, val) {
                    this._config[key] = val;
                    return this._config[key];
                };

                return Configure;
            }());

            _export("Configure", Configure);
        }
    };
});