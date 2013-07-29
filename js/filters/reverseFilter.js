'use strict';

chat.filter('reverse', function() {
  return function(items) {
  	if (!items) return undefined;
    return items.slice().reverse();
  };
});