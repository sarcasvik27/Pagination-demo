import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputBox = ({placeholder, data, secure, error}) => {
  const [value1, setValue] = data;
  const [error1, seterror] = error;
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textbox}
      onChangeText={content => {setValue(content,seterror(""))}}
      value={value1}
      secureTextEntry={secure}
     >
    </TextInput>
  );
};

const styles = StyleSheet.create({
  textbox: {
    backgroundColor: '#d1d1d1',
    padding: 20,
    width: '90%',
    borderRadius: 12,
    marginVertical: 20,
  },
});
export default InputBox;
