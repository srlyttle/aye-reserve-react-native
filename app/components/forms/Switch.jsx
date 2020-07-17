import React from 'react';

import { useFormikContext } from 'formik';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';
import { Switch } from 'react-native';

const SwitchField = ({ name, width, ...otherProps }) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <>
      <Switch
        value={values[name]}
        onValueChange={(value) => {
          setFieldValue(name, value);
        }}
        {...otherProps}
      />
    </>
  );
};

export default SwitchField;
