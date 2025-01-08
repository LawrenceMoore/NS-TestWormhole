"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyNewWormhole;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } //  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react MyNewWormhole.jsx -o MyNewWormhole.js
// 2. add, commit, push to main
function MyNewWormhole(_ref) {
  var _request$properties$l, _request$properties$l2;
  var request = _ref.request,
    callback = _ref.callback;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var handlePress = function handlePress() {
    if (callback) {
      callback(inputValue);
    }
  };

  // if (!request) {
  return /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: handlePress,
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.title
  }, "No request available"), /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    style: styles.input,
    placeholder: "Enter message",
    value: inputValue,
    onChangeText: function onChangeText(text) {
      return setInputValue(text);
    }
  })));
  // }

  return /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: handlePress,
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  }
});
