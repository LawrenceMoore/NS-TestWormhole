import * as React from 'react';
import { Animated, Alert, TouchableOpacity, Text } from 'react-native';

import { InnerContainer, MsgBox, StyledContainer, TextLink, TextLinkContent } from '../components/styles';

function CustomButton() {
  return (
    <TouchableOpacity onPress={() => Alert.alert('Hello!')}>
      <Animated.Text children="Click here!" />
    </TouchableOpacity>
  );
}

// export default function MyNewWormhole() {
//   const message = React.useMemo(() => 'Hello, world!', []);
//   return (
//     <Animated.View style={{ flex: 1, backgroundColor: 'red' }}>
//       <Animated.Text>{message}</Animated.Text>
//       <CustomButton />
//     </Animated.View>
//   );
// }
export default function MyNewWormhole() {
  return (
    <Text>Testing WORMHOLE</Text>
  );
}