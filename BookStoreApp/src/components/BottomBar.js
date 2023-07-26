import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../utilities/StylingConstants';
const BottomBar = () => {
  return (
    <View style={styles.container}>
      <Text style = {{textAlign:'center'}} >Copyright 2020, BookStore Private Limited</Text>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    height: theme.height.height1,
    width:theme.width.width7
},
});
