import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState, useContext} from 'react';
import theme from '../utilities/StylingConstants';
import {AppContext} from '../context/Context';
import AddToWhishList from '../assets/images/Add to whishlist';
const BookCard = (prop) => {
  const [isAddedToCart,setIsAddedToCart] = useState(false)
  const {cart,whishlist,addToCart,addToWhishlist} = useContext(AppContext);
   
 const handleAddToCart = (item) =>{
  addToCart(item);
  setIsAddedToCart(true)
 }
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={{uri: prop?.image}}
          height={190}
          width={theme.width.width3}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text1}>{prop.bookname}</Text>
        <Text style={styles.text2}>{prop.author}</Text>
        <Text style={styles.text3}>{prop.price}</Text>
      </View>

      {
  isAddedToCart ? (
    <View>
      <TouchableOpacity>
        <Text style={styles.button1}>ADDED TO BAG</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.buttonView}>
      <TouchableOpacity style={styles.whishlistButton} onPress={() => addToWhishlist(prop)}>
        <AddToWhishList />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAddToCart(prop)}>
        <Text style={styles.button2}>ADD TO BAG</Text>
      </TouchableOpacity>
    </View>
  )
}

    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.grey,
    borderWidth: 0.8,
    width: theme.width.width3,
    paddingBottom: theme.spacing.space3,
    margin: theme.spacing.space3,
  },
  Image: {
    height: theme.height.height2,
  },
  imageView: {
    backgroundColor: theme.colors.lightGrey,
    height: theme.height.height7,
    width: theme.width.width3,
    marginBottom: theme.spacing.space2
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
  button1: {
    color: theme.colors.offWhite,
    backgroundColor: theme.colors.maroon,
    padding: 2,
    width: theme.width.width3,
    opacity : 0.7,
    textAlign: 'center',
  },
  button2: {
    color: theme.colors.offWhite,
    backgroundColor: theme.colors.maroon,
    padding: 2,
    width: theme.width.width2,
    textAlign: 'center',
    borderRadius: theme.spacing.space1,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  whishlistButton: {
    height: theme.spacing.space4,
    width: theme.spacing.space4,
    marginHorizontal: 3,
    borderWidth: 0.5,
    borderColor: theme.colors.black,
    padding: 4,
  },
});
