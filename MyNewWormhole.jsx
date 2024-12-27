//  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react MyNewWormhole.jsx -o MyNewWormhole.js
// 2. add, commit, push to main

import * as React from 'react';
import { Animated, Alert, TouchableOpacity, Text, View } from 'react-native';

function CustomButton() {
  return (
    <TouchableOpacity onPress={() => Alert.alert('Hello!')}>
      <Animated.Text>
        Click here!
      </Animated.Text>
    </TouchableOpacity>
  );
}

export default function MyNewWormhole() {
  const message = React.useMemo(() => 'Hello, world, this is from the wormhole!', []);
  return (
    <Animated.View style={{ flex: 1, backgroundColor: 'red' }}>
      <Animated.Text>{message}</Animated.Text>
      <CustomButton />
    </Animated.View>
  );
}
