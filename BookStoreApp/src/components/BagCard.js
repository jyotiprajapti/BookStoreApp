import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useContext} from 'react';
import Add from '../assets/images/Group 4217';
import Remove from '../assets/images/Group 4216';
import Cross from '../assets/images/Icon material-close';
import theme from '../utilities/StylingConstants';

const BagCard = ({
  bookname,
  author,
  price,
  number,
  url,
  addToCart,
  removeFromCart,
}) => {
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.image}
          source={{uri: url}}
          height={70}
          width={50}
        />
        <View style={styles.textView}>
          <TouchableOpacity style={styles.cross}>
            <Cross />
          </TouchableOpacity>
          <Text style={styles.text1}>{bookname}</Text>
          <Text style={styles.text2}>{author}</Text>
          <Text style={styles.text3}>{price}</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <TouchableOpacity onPress={removeFromCart} >
          <Remove />
        </TouchableOpacity>
        <Text style={styles.number}>{number}</Text>
        <TouchableOpacity onPress={addToCart}>
          <Add />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BagCard;

const styles = StyleSheet.create({
  container: {
    height: theme.height.height7,
    borderBottomWidth: 1,
    borderColor: theme.colors.black,
    width: theme.width.width6,
    marginLeft: theme.spacing.space2,
    backgroundColor: theme.colors.offWhite,
    margin: theme.spacing.space1,
    padding: 2,
  },
  image: {
    height: '117%',
    width: theme.width.width2,
    backgroundColor: 'white',
  },
  title: {
    color: theme.colors.black,
    fontWeight: 'bold',
    fontSize: theme.spacing.space3,
  },
  text1: {
    color: theme.colors.black,
    fontSize: theme.spacing.space3,
    flexWrap: 'wrap',
    marginVertical: theme.spacing.space2,
  },
  text2: {
    color: theme.colors.grey,
    fontSize: theme.spacing.space3,
    marginBottom: theme.spacing.space1,
  },
  text3: {
    color: theme.colors.black,
    fontSize: theme.spacing.space4,
  },
  textView: {
    marginHorizontal: theme.spacing.space2,
    width: theme.width.width3,
    marginVertical: theme.spacing.space2,
  },
  cross: {
    marginLeft: theme.width.width5,
  },
  view2: {
    marginLeft: theme.width.width2,
    paddingHorizontal: theme.spacing.space2,
    flexDirection: 'row',
    gap: theme.spacing.space5,
  },
  number: {
    color: theme.colors.maroon,
    fontSize: theme.spacing.space3,
  },
});
