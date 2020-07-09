import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import Text from '../components/Text';
import Icon from '../components/Icon';

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subtitle}>{listing.subtitle}</Text>
        <View style={styles.categoryContainer}>
          <ListItem
            IconComponent={
              <Icon
                name={
                  listing.category === 'Food'
                    ? 'silverware-fork-knife'
                    : 'glass-wine'
                }
              />
            }
            // IconComponent={
            //   <Icon
            //     name="local-dining"
            //     //backgroundColor={item.icon.backgroundColor}
            //   />
            // }
            title="Tables Available"
            subTitle={listing.tables}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '200',
  },
  categoryContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
