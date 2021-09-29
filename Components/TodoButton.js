import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const TodoButton = ({onPress, complete, name}) => {
  return (
    <View>
      <TouchableHighlight
        onPress={onPress}
        underlayColor="#efefef"
        style={styles.button}>
        <Text
          style={[
            styles.text,
            complete ? styles.complete : null,
            name === 'Delete' ? styles.deleteButton : null,
          ]}>
          {name}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default TodoButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  text: {
    color: '#666666',
  },
  complete: {
    color: 'green',
    fontWeight: 'bold',
  },
  deleteButton: {
    color: 'aqua',
  },
});
