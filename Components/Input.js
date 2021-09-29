import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({inputVal, inputChange}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={inputVal}
        onChangeText={inputChange}
        style={styles.input}
        placeholder="What needs to be done ?"
        placeholderTextColor="#CACACA"
        selectionColor="#666666"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
