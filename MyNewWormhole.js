"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyNewWormhole;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react MyNewWormhole.jsx -o MyNewWormhole.js
// 2. add, commit, push to main
function MyNewWormhole(props) {
  var cards = props.cards.cards;
  console.log("Cards", cards);
  var renderCard = function renderCard(_ref) {
    var _item$properties$loca, _item$properties$loca2;
    var item = _ref.item;
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: styles.card
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.title
    }, item.properties.title), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.description
    }, item.properties.description), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.price
    }, "Base Price: $", item.properties.basePricePerNight), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.location
    }, "Location: ", (_item$properties$loca = item.properties.location) === null || _item$properties$loca === void 0 || (_item$properties$loca = _item$properties$loca.address) === null || _item$properties$loca === void 0 ? void 0 : _item$properties$loca.city, ", ", (_item$properties$loca2 = item.properties.location) === null || _item$properties$loca2 === void 0 || (_item$properties$loca2 = _item$properties$loca2.address) === null || _item$properties$loca2 === void 0 ? void 0 : _item$properties$loca2.state), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.type
    }, "Type: $", item.headers.type));
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.container
  }, cards && cards.length >= 0 ? /*#__PURE__*/_react["default"].createElement(_reactNative.FlatList, {
    data: cards,
    keyExtractor: function keyExtractor(item) {
      return item.id;
    },
    renderItem: renderCard
  }) : /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "No cards available"));
}
var styles = _reactNative.StyleSheet.create(_defineProperty({
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
  }
}, "location", {
  fontSize: 18,
  color: '#777'
}));
