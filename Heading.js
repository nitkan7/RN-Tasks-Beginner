import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: '#f83a4f',
    fontWeight: '100',
  },
});
export default Heading;
