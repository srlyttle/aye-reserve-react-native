import React from 'react';
import PropTypes from 'prop-types';

import { ImageBackground, View, Text } from 'react-native';
import Styles from './WelcomeScreen.styles';
import CustomButton from '../components/CustomButton.';

import AppCard from '../components/AppCard.';

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      style={Styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={Styles.logo}>
        <Text style={Styles.logoText}>Aye Reserve </Text>
      </View>
      <View style={Styles.logo}></View>
      <View style={Styles.slogan}>
        <Text style={Styles.sloganText}>Optomising Bookings</Text>
      </View>
      <View style={Styles.buttonsContainer}>
        <CustomButton title="Login" />
        <CustomButton title="Register" />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
