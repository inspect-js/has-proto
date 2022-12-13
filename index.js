'use strict';

var test = {
	foo: {}
};

module.exports = function hasProto() {
	return { __proto__: test }.foo === test.foo;
};
