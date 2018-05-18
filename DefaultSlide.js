import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from 'react-native';

export default class DefaultSlide extends React.PureComponent {
  render() {
    const style = {
      backgroundColor: this.props.backgroundColor,
      width: this.props.width,
      height: this.props.height,
    }
    return (
      <View style={[styles.mainContent, style]}>
        <Image 
          source={this.props.image} 
          style={this.props.imageStyle} 
          resizeMode={'stretch'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
  },
  text: {
    color: 'rgba(255, 255, 255, .7)',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '300',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    color: 'rgba(255, 255, 255, .7)',
    fontWeight: '300',
    paddingHorizontal: 16,
  }
});
