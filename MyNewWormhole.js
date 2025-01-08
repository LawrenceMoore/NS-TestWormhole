"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyNewWormhole;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react MyNewWormhole.jsx -o MyNewWormhole.js
// 2. add, commit, push to main

function MyNewWormhole(props) {
  var _request$properties$l, _request$properties$l2;
  var request = props.request;
  if (!request) {
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: styles.container
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.title
    }, "No request available"));
  }
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.card
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.title
  }, request.properties.title), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.description
  }, request.properties.description), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.price
  }, "Base Price: $", request.properties.basePricePerNight), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.location
  }, "Location: ", (_request$properties$l = request.properties.location) === null || _request$properties$l === void 0 || (_request$properties$l = _request$properties$l.address) === null || _request$properties$l === void 0 ? void 0 : _request$properties$l.city, ", ", (_request$properties$l2 = request.properties.location) === null || _request$properties$l2 === void 0 || (_request$properties$l2 = _request$properties$l2.address) === null || _request$properties$l2 === void 0 ? void 0 : _request$properties$l2.state), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.type
  }, "Type: ", request.header.type)));
}
var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10
  },
  card: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    marginVertical: 5
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5
  },
  location: {
    fontSize: 14,
    color: '#555'
  },
  type: {
    fontSize: 18,
    color: '#777'
  }
});
