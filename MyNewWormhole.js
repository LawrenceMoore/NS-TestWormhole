"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyNewWormhole;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
//  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react MyNewWormhole.jsx -o MyNewWormhole.js
// 2. add, commit, push to main

function CustomButton() {
  return /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
    onPress: function onPress() {
      return _reactNative.Alert.alert('Hello!');
    }
  }, /*#__PURE__*/React.createElement(_reactNative.Animated.Text, null, "Click here!"));
}
function MyNewWormhole() {
  var message = React.useMemo(function () {
    return 'Hello, world, this is from the wormhole!';
  }, []);
  return /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: {
      flex: 1,
      backgroundColor: 'red'
    }
  }, /*#__PURE__*/React.createElement(_reactNative.Animated.Text, null, message), /*#__PURE__*/React.createElement(CustomButton, null));
}
