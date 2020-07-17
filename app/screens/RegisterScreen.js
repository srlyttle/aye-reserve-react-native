import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Yup from 'yup';
import UserContext from '../context/UserContext';

import Screen from '../components/Screen';

import {
  Form,
  AppFormField as FormField,
  SubmitButton,
  SwitchField,
} from '../components/forms';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Display Name'),
});

const RegisterScreen = ({ navigation }) => {
  const [error, setError] = useState();
  const { updateUserDetails } = useContext(UserContext);

  const handleSubmit = async (userInfo) => {
    updateUserDetails(userInfo);
  };
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: '', isVenue: false }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <>
          <FormField
            autoCorrect={false}
            name="name"
            placeholder="Display Name"
          />
          <View style={styles.switchRow}>
            <Text style={styles.venueText}>Are you a venue ?</Text>
            <SwitchField name="isVenue" />
          </View>
          <SubmitButton title="Continue" />
        </>
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  switchRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  venueText: {
    // backgroundColor: 'red',
    paddingHorizontal: 15,
    fontSize: 20,
  },
});

export default RegisterScreen;
