import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

const Button = ({submitTodo}) => {
  //passing a function as a prop
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        underlayColor="#efefef"
        style={styles.Button}
        onPress={submitTodo}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 100,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 50,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#666666',
    fontWeight: '600',
  },
});
