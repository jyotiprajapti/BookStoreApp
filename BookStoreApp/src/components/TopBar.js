import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Cart from '../assets/images/My Bag';
import Logo from '../assets/images/Logo';
import Whishlist from '../assets/images/Whishlist';
import WhishlistOpen from '../assets/images/Whichlist open';
import Search from '../assets/images/Search';
import theme from '../utilities/StylingConstants';
const TopBar = ({navigation}) => {
  const [whishList, setWhishList] = useState(false);
  const [isSearch, setIsSearch] = useState(true);
  const [isWishList, setIsWhishListbar] = useState(false);
  const [isBag, setIsBag] = useState(true);
  //   const handleNavigationWhislist = () =>{
  // setWhishList(!whishList)
  //     navigation.navigate('WhishList')
  //   }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logo}>
        <Logo />
      </TouchableOpacity>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Search />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('WhishList')}>
          {isWishList ? <Whishlist /> : <WhishlistOpen />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyBag')}>
          {isBag ? <Cart /> : <Cart />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    elevation: 4,
    shadowColor: theme.colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: theme.spacing.space1,
    flexDirection: 'row',
    height: theme.height.height3,
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    marginLeft: theme.width.width3,
    gap: theme.spacing.space3,
  },
  logo: {
    marginLeft: theme.spacing.space2,
  },
});
