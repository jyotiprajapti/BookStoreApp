import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native-svg';
import theme from '../utilities/StylingConstants';
import AddToWhishList from '../assets/images/Add to whishlist'
import { template } from '@babel/core';
const BookCard = ({title, writer, price}) => {
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const handleAddToCart = () =>{

  }
  const handleAddToWhishList = () =>{
    
  }
  return (
    <View style = {styles.container}>
      <View style={styles.imageView}>
        <Image />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text1}>{title}</Text>
        <Text style={styles.text2}>{writer}</Text>
        <Text style={styles.text3}>{price}</Text>
      </View>
      {isAddedToBag ? (
        <View >
         <TouchableOpacity><Text style = {styles.button1}>ADDED TO BAG</Text></TouchableOpacity>
        </View>
      ) : (
        <View style = {styles.buttonView}>
            <TouchableOpacity style = {styles.whishlistButton} ><AddToWhishList/></TouchableOpacity>
         <TouchableOpacity><Text style = {styles.button2}>ADD TO BAG</Text></TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.grey,
    borderWidth:0.8,
    width: theme.width.width3,
    paddingBottom: theme.spacing.space3,
    margin: theme.spacing.space3
  },
  Image: {
    height: theme.height.height2,
  },
  imageView: {
    paddingVertical: theme.spacing.space4,
    backgroundColor: theme.colors.lightGrey,
    height: theme.height.height7,
    width: theme.width.width3,
  },
  text1: {
    color: theme.colors.black,
    fontSize: theme.spacing.space3,
    flexWrap: 'wrap',
  },
  text2: {
    color: theme.colors.grey,
    fontSize: theme.spacing.space2,
  },
  text3: {
    color: theme.colors.black,
    fontSize: theme.spacing.space4,
  },
  textView: {
    marginLeft: theme.spacing.space1,
    width: theme.width.width3,
    marginVertical: theme.spacing.space2,
  },
  button1:{
color: theme.colors.offWhite,
backgroundColor:theme.colors.maroon,
padding: 2,
width: theme.width.width3,
textAlign:'center'
  },
  button2:{
    color: theme.colors.offWhite,
    backgroundColor:theme.colors.maroon,
    padding: 2,
    width: theme.width.width2,
    textAlign:'center',
    borderRadius:theme.spacing.space1
      },
      buttonView:{
flexDirection:'row',
alignItems: 'center',
gap: 3
      },
whishlistButton:{
    height: theme.spacing.space4,
    width: theme.spacing.space4,
    marginHorizontal: 3,
    borderWidth: 0.5,
    borderColor: theme.colors.black,
    padding:4,
    
}
});
