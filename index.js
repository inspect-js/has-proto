'use strict';

var test = {
	__proto__: null,
	foo: {}
};

var $Object = Object;

module.exports = function hasProto() {
	return { __proto__: test }.foo === test.foo
		&& !(test instanceof $Object);
};
