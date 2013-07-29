/*global todomvc */
'use strict';

/**
 * Directive that executes an expression when the element it is applied to gets
 * an `escape` keydown event.
 */
chat.directive('ngEnter', function () {
	var ESCAPE_KEY = 13;
	return function (scope, elem, attrs) {
		elem.bind('keydown', function (event) {
			debugger;
			if (event.keyCode === ESCAPE_KEY) {
				scope.$apply(attrs.ngEnter);
			}
		});
	};
});

