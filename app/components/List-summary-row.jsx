import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

import colors from '../config/colors';

import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListSummaryRow = ({
  IconComponent,
  image,
  name,
  summaryText,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.almostGrey} onPress={onPress}>
        <View style={styles.rowContainer}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{name}</Text>
            {summaryText && <Text>{summaryText}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
import Colors from '../config/colors';

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
    marginHorizontal: 10,
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
  },
  summaryText: {
    color: Colors.lightGrey,
  },
});

ListSummaryRow.propTypes = {};

export default ListSummaryRow;
