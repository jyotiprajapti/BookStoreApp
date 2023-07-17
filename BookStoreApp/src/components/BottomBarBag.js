import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../utilities/StylingConstants';
const BottomBarBag = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.view}>
        <Text style = {styles.text1} >Total</Text>
        <Text style = {styles.text2} >Rs 3000</Text>
      </View>
      <View
         style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('OrderPlaced')} >
          <Text style={styles.buttonText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: theme.height.height4,
    width: theme.width.width7,
    alignSelf: 'center',
    elevation: 6,
    marginBottom: -10,
    flexDirection: 'row',
  },
  button: {
    height: theme.height.height2,
    width: theme.width.width3,
    backgroundColor: theme.colors.maroon,
    justifyContent: 'center',
    borderRadius: theme.spacing.space1,
    marginLeft: theme.spacing.space3
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  view:{
    flex: 1,
    marginTop: theme.spacing.space3,
    borderRightWidth: 2,
    borderColor: theme.colors.grey,
  },
  text1:{
color : theme.colors.grey,
fontWeight: 'bold',
fontSize: theme.spacing.space3,
marginLeft: theme.spacing.space3
  },
  text2:{
    color : theme.colors.maroon,
    fontWeight: 'bold',
    fontSize: theme.spacing.space3,
    marginLeft: theme.spacing.space3
  }
});

export default BottomBarBag;
