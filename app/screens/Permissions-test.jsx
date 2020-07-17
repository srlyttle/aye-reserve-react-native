import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import useLocation from '../hooks/useLocation';

function testPermissions(props) {
  const location = useLocation();
  console.log('location', location);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default testPermissions;
