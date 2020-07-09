import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

import Styles from './booking.styles';
import AppCard from '../components/AppCard.';

import { MaterialCommunityIcons } from '@expo/vector-icons';

// const bookingsData = [
//   {
//     id: 1,
//     title: 'Booking 1',
//     icon: {
//       name: 'format-list-bulleted',
//       backgroundColor: colors.black,
//     },
//   },
// ];
const Bookings = (props) => {
  const cardDetails = {
    title: 'Great Venue',
    subtitle: 'sub test',
    //image: '../../assets/baabel-belfast.jpg',
  };
  return (
    <View>
      <AppCard
        title={cardDetails.title}
        subtitle={cardDetails.subtitle}
        image={require('../assets/babel-belfast.jpg')}
      />

      <View>
        <MaterialCommunityIcons name="close" />
      </View>
    </View>
  );
};

Bookings.propTypes = {};

export default Bookings;
