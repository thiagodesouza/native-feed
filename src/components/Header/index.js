import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>GoNative App</Text>
  </View>
);

export default Header;
