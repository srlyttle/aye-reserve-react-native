import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const AppCard = ({ title, subtitle, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: Colors.white,
    margin: 20,
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: 200,
    overflow: 'hidden',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
  },
  subtitle: {
    fontWeight: '200',
  },
});
AppCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
};

export default AppCard;
