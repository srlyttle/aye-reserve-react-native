import React, { useMemo } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { StyleSheet, View, FlatList } from 'react-native';

import { ListItem, ListItemSeparator } from '../components/lists';
import colors from '../config/colors';
import Icon from '../components/Icon';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import UserContext from '../context/UserContext';

const menuItems = [
  {
    title: 'My Bookings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
    targetScreen: routes.BOOKINGS,
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  const { setCurrentUser, currentUser } = React.useContext(UserContext);

  const email = currentUser.attributes.email;
  const signout = async () => {
    await Auth.signOut();
    setCurrentUser(null);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          subTitle={email}
          //image={require('../assets/simon.png')} // TODO: implement avatar
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              // IconComponent={
              //   <Icon
              //     name={item.icon.name}
              //     backgroundColor={item.icon.backgroundColor}
              //   />
              // }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={signout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
