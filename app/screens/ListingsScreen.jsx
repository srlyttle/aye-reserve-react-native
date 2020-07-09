import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/AppCard.';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Deanes Meat Locker',
    category: 'Food',
    subtitle: 'Hanan meat dishes second to none',
    image: require('../assets/meat-locker.jpg'),
    tables: 2,
  },
  {
    id: 2,
    title: 'Babel Rooftop Bar',
    category: 'Drinks',
    subtitle: 'Contemporary cocktail bar with great views of the city',
    image: require('../assets/babel-belfast.jpg'),
    tables: 4,
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            onPress={() => navigation.navigate('ListingDetails', item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
