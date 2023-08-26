# Expo Viewport

Use the vw, vh, lvh, vmin, vmax properties from css directly in your [Expo](https://expo.dev/) or [React Native](https://reactnative.dev/) project.

The logic of the values is the same as their css counterparts:

`vw` - Viewport Width

`vh` - Viewport Height

`lvh` - Large Viewport Height

`vmax` - Viewport Maximum

`vmin` - Viewport Minimum

## Install

```bash
$ npm install expo-viewport
```

or

```bash
$ yarn add expo-viewport
```

## Usage

### Example #1

```bash
import { Text, View } from 'react-native';
import { vw, vh } from 'expo-viewport';

export default function App() {
  return (
    <View
      style={{
        display: 'flex',
        width: vw(100),
        height: vh(100),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: vw(4.25) }}>Look at me!</Text>
    </View>
  );
}
```

or

```bash
import { StyleSheet, Text, View } from 'react-native';
import { vw, vh } from 'expo-viewport';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Look at me!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: vw(100),
    height: vh(100),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: vw(4.25),
  },
});
```

### Example #2

```bash
import { Pressable, Text } from 'react-native';
import { lvh, vmax, vmin } from 'expo-viewport';

const Button = () => {
  return (
    <Pressable
      style={{
        minHeight: vmax(10),
        maxHeight: lvh(12),
        backgroundColor: 'green',
      }}
    >
      <Text style={{ fontSize: vmin(8), color: 'white' }}>Click me!</Text>
    </Pressable>
  );
};

export default Button;
```

or

```bash
import { StyleSheet, Pressable, Text } from 'react-native';
import { lvh, vmax, vmin } from 'expo-viewport';

const Button = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.font}>Click me!</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: vmax(10),
    maxHeight: lvh(12),
    backgroundColor: 'green',
  },
  font: {
    fontSize: vmin(8),
    color: 'white',
  },
});

export default Button;
```

## License

[MIT](https://github.com/Lorneyq/expo-viewport/blob/main/LICENSE)
