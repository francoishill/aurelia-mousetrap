'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator', './mousetrap-attribute'], function (_export, _context) {
    var inject, TaskQueue, EventAggregator, AbstractMousetrapAttribute, MousetrapFocusCustomAttribute;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            TaskQueue = _aureliaFramework.TaskQueue;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }, function (_mousetrapAttribute) {
            AbstractMousetrapAttribute = _mousetrapAttribute.AbstractMousetrapAttribute;
        }],
        execute: function () {
            _export('MousetrapFocusCustomAttribute', MousetrapFocusCustomAttribute = function (_AbstractMousetrapAtt) {
                _inherits(MousetrapFocusCustomAttribute, _AbstractMousetrapAtt);

                function MousetrapFocusCustomAttribute() {
                    _classCallCheck(this, MousetrapFocusCustomAttribute);

                    return _possibleConstructorReturn(this, _AbstractMousetrapAtt.apply(this, arguments));
                }

                MousetrapFocusCustomAttribute.prototype.attached = function attached() {
                    if (!this.element.classList.contains('mousetrap')) {
                        this.element.classList.add('mousetrap');
                    }
                };

                MousetrapFocusCustomAttribute.act = function act(element) {
                    element.focus();
                };

                return MousetrapFocusCustomAttribute;
            }(AbstractMousetrapAttribute));

            _export('MousetrapFocusCustomAttribute', MousetrapFocusCustomAttribute);
        }
    };
});