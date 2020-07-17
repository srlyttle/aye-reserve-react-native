import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Amplify from '@aws-amplify/core';
import { Auth, Hub } from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react-native';

import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import Permissions from './app/screens/Permissions-test';
import awsconfig from './aws-exports';
import { AmplifyTheme, Localei18n, SignUpConfig } from './app/config';
import UserContext from './app/context/UserContext';
import { useUser } from './app/context/useUser';
import {
  gqlCreateUserDetails,
  gqlGetAllUserDetails,
} from './app/services/user-details.service';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

export default function App() {
  const { currentUser, setCurrentUser } = useUser();

  const getAuthUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      });
      if (authUser) {
        setCurrentUser(authUser);
        getUserDetails(authUser);
      } else {
        setCurrentUser(null);
      }
    } catch (error) {
      setCurrentUser(null);
    }
  };

  const getUserDetails = async (authUser) => {
    try {
      const result = await gqlGetAllUserDetails(authUser);

      if (
        result &&
        result.data.listUserDetailss &&
        result.data.listUserDetailss.items.length > 0
      ) {
        const userDetails = result.data.listUserDetailss.items[0];
        setCurrentUser({ ...authUser, userDetails });
      }
    } catch (error) {
      // TODO: implement error handling
      console.log('error', error);
    }
  };

  const updateUserDetails = async (userInfo) => {
    const userDetails = { ...userInfo, email: currentUser.attributes.email };

    try {
      await gqlCreateUserDetails(userDetails, currentUser);
      setCurrentUser({ ...currentUser, userDetails });
    } catch (error) {
      // TODO: implement error handling
      console.log('error', error);
    }
  };

  const hubListener = () => {
    Hub.listen('auth', (data) => {
      const { payload } = data;
      switch (payload.event) {
        case 'signIn':
          getAuthUser();
          break;
        case 'signOut':
          setCurrentUser(null);
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    getAuthUser();
    hubListener();
    return () => Hub.remove();
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, updateUserDetails }}
      >
        <StatusBar barStyle="dark-content" />
        <Localei18n />
        {!currentUser ? (
          <Authenticator
            usernameAttributes="email"
            signUpConfig={SignUpConfig}
            // theme={AmplifyTheme}
          />
        ) : (
          <NavigationContainer>
            {currentUser && currentUser.userDetails ? (
              <AppNavigator />
            ) : (
              <AuthNavigator />
            )}
          </NavigationContainer>
        )}
      </UserContext.Provider>
    </>
  );
}
