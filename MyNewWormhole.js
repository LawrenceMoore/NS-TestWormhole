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
// transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react MyNewWormhole.jsx -o MyNewWormhole.js

function CustomButton() {
  return /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
    onPress: function onPress() {
      return _reactNative.Alert.alert('Hello!');
    }
  }, /*#__PURE__*/React.createElement(_reactNative.Animated.Text, null, "Click here!"));
}

// export default function MyNewWormhole() {
//   const message = React.useMemo(() => 'Hello, world!', []);
//   return (
//     <Animated.View style={{ flex: 1, backgroundColor: 'red' }}>
//       {/* <Animated.Text>{message}</Animated.Text> */}
//       <CustomButton />
//     </Animated.View>
//   );
// }

function MyNewWormhole() {
  return /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Text, null, "Test Wormhole Component"));
}
