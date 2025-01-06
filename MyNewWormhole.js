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
  var cards = props.cards;
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
    }, "Location: ", (_item$properties$loca = item.properties.location) === null || _item$properties$loca === void 0 || (_item$properties$loca = _item$properties$loca.address) === null || _item$properties$loca === void 0 ? void 0 : _item$properties$loca.city, ", ", (_item$properties$loca2 = item.properties.location) === null || _item$properties$loca2 === void 0 || (_item$properties$loca2 = _item$properties$loca2.address) === null || _item$properties$loca2 === void 0 ? void 0 : _item$properties$loca2.state));
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
  }
});
