/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Animated, 
  Image, 
  Easing
} from 'react-native';

export default class ReactAnimationsTest extends Component {

  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
  }

  animate () {

    this.animatedValue.setValue(0)

    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        /*easing: Easing.linear
        easing: Easing.quad
        easing: Easing.quadIn
        easing: Easing.quadOut*/
        easing: Easing.quintInOut, 
        delay: 500,
      }
    ).start(() => this.animate())
  }

  render() {
    
    const spin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })
    const fade = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    })
    const scaleXY = this.animatedValue.interpolate({
      inputRange: [0, .5, 1],
      outputRange: [0, 1, 0]
    })

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            height: 25,
            width: 25,
            marginLeft, }}
            source={require('./images/location-100x100.png')} />

        <Animated.Image
          style={{
            height: 25,
            width: 25,
            opacity }}
            source={require('./images/location-100x100.png')} />

        <Animated.Image
          style={{
            height: 25,
            width: 25,
            transform: [{scale: scaleXY}] }}
            source={require('./images/location-100x100.png')} />

        <Animated.Image
          style={{
            width: 25,
            height: 25,
            transform: [{rotate: spin}] }}
            source={require('./images/location-100x100.png')} />

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ReactAnimationsTest', () => ReactAnimationsTest);
