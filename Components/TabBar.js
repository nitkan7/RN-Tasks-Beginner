import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({setType, type}) => {
  return (
    <View style={styles.container}>
      {/* Lower View TabBar Container */}
      <TabBarItem type={type} title="All" setType={() => setType('All')} />
      <TabBarItem
        type={type}
        title="Active"
        setType={() => setType('Active')}
      />
      <TabBarItem
        type={type}
        title="Complete"
        setType={() => setType('Complete')}
      />
      {/* TabBarItems are induvidual tab components */}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    height: 875,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
});
