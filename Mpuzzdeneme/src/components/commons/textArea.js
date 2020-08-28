import React from 'react';
import { StyleSheet, View, TextInput,Dimensions } from 'react-native';

const{width, height} = Dimensions.get('window');


const TextArea = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.textAreaWrapper}>
      <TextInput placeholder={placeholder}
                 keyboardType='numeric'
                 onChangeText={onChangeText}
                 multiline={true}
                 value={value}
                 style={styles.textArea}
                 />
    </View>
  )
}

const styles = StyleSheet.create({
    textAreaWrapper: {
      borderWidth: 1,
      borderColor: '#CFD8DC',
      height: height*0.06,
      width: width*0.50,
    },
    textArea: {
      color: '#7B8D93',
      fontSize: 18,
      height: height*0.06,
      width: width*0.50,
    }
  });
  
  export { TextArea };
