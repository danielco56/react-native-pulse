/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';

const App: () => React$Node = () => {
  const animationValue = useRef(new Animated.Value(0));

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(animationValue.current, {
        toValue: 1,
        useNativeDriver: true,
        duration: 1000,
        easing: Easing.linear,
      }),
    );

    animation.start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.thirdView,
          {
            transform: [
              {
                scale: animationValue.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.5],
                }),
              },
            ],
            opacity: animationValue.current.interpolate({
              inputRange: [0, 1],
              outputRange: [0.2, 0],
            }),
          },
        ]}
      />
      <Animated.View
        style={[
          styles.secondView,
          {
            transform: [
              {
                scale: animationValue.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.5],
                }),
              },
            ],
            opacity: animationValue.current.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 0.2],
            }),
          },
        ]}
      />
      <Animated.View
        style={[
          styles.firstView,
          {
            transform: [
              {
                scale: animationValue.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.5],
                }),
              },
            ],
            opacity: animationValue.current.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0, 1, 0.5],
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  firstView: {
    position: 'absolute',
    zIndex: 1,
    height: 22,
    width: 22,
    backgroundColor: 'red',
    borderRadius: 11,
    alignSelf: 'center',
    alignContent: 'center',
  },
  secondView: {
    position: 'absolute',
    zIndex: 2,
    height: 64,
    width: 64,
    backgroundColor: 'red',
    borderRadius: 32,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    opacity: 0.5,
  },
  thirdView: {
    position: 'absolute',
    zIndex: 3,
    height: 100,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    opacity: 0.2,
  },
});

export default App;
