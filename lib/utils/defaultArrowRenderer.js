'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrowRenderer = function arrowRenderer(_ref) {
	var onClick = _ref.onClick;

	return _react2.default.createElement('span', {
		className: 'Select-arrow',
		onClick: onClick
	});
};

arrowRenderer.propTypes = {
	onMouseDown: _propTypes2.default.func
};

exports.default = arrowRenderer;