import React from 'react';
import { Image } from 'react-native';

function Logo() {
  return <Image style={{ width: 28, height: 26 }} source={require('../../assets/logo.png')} />;
}

export default Logo;
