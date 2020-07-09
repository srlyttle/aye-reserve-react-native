import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../config/colors';

const AppButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    borderColor: Colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 5,
  },
  text: {
    color: Colors.primary,
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

AppButton.propTypes = {};

export default AppButton;
