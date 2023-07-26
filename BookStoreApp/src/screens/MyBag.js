import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';
import TopBar from '../components/TopBar';
import theme from '../utilities/StylingConstants';
import Add from '../assets/images/Add';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BagCard from '../components/BagCard';
import BottomBarBag from '../components/BottomBarBag';
import AddressModal from '../components/AddressModal';
import {AppContext} from '../context/Context';
const MyBag = ({navigation}) => {
  const {cart, addToCart, removeFromCart} = useContext(AppContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data,setData] = useState({});
  const handleModalVisible = (data) => {
    setData(data)
    setIsModalVisible(!isModalVisible);
  };
console.log("data from address modal",data)
 
  const countOccurrence = (cart, object) => {
    let count = 0;
    for (let element of cart) {
      if (element === object) {
        count++;
      }
    }
    return count;
  };
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <View style={styles.container2}>
        <View style={styles.textView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color={theme.colors.black} />
          </TouchableOpacity>
          <Text style={styles.text}>My Bag</Text>
          <Text style={styles.text2}>({cart.length})</Text>
        </View>
        <ScrollView style={styles.books}>
          <FlatList
            data={cart}
            renderItem={({item}) => (
              <BagCard
                author={item.author}
                bookname={item.bookname}
                price={item.price}
                number={countOccurrence(cart, item)}
                url={item.image}
                addToCart={addToCart(item)}
                removeFromCart={removeFromCart(item)}
              />
            )}
          />
        </ScrollView>
      </View>
      <View style={styles.details}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={handleModalVisible}>
          <Text style={styles.text3}>Customer Details</Text>
          <Add style={styles.add} />
        </TouchableOpacity>
      </View>

      <View style = {styles.addressView} >
        <Text style= {styles.addressText}>{data.name}</Text>
      <Text style= {styles.addressText}>{data.phone}</Text>
      <Text style= {styles.addressText}>{data.pincode}</Text>
      <Text style= {styles.addressText}>{data.landmark}</Text>
      <Text style= {styles.addressText}>{data.locality}</Text>
      <Text style= {styles.addressText}>{data.address}</Text>
     </View>
      {isModalVisible && (
        <AddressModal
          handleModalVisible={handleModalVisible}
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )}
      <View style={{flex: 1}}></View>
      <BottomBarBag navigation={navigation} />
    </View>
  );
};

export default MyBag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    marginLeft: theme.spacing.space2,
  },
  text: {
    fontSize: theme.text.text3,
    color: theme.colors.black,
  },
  text2: {
    fontSize: theme.text.text2,
    color: theme.colors.grey,
  },
  text3: {
    fontSize: theme.text.text2,
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    height: theme.height.height3,
    padding: theme.spacing.space2,
    width: theme.width.width6,
  },
  textView: {
    flexDirection: 'row',
    gap: theme.spacing.space2,
    alignItems: 'center',
    marginVertical: theme.spacing.space3,
  },
  books: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  details: {
    margin: theme.spacing.space4,
    backgroundColor: theme.colors.lightGrey,
    height: theme.height.height6,
    width: theme.width.width6,
    justifyContent: 'center',
  },
  add: {
    marginTop: theme.spacing.space3,
    marginRight: theme.spacing.space3,
  },
  addressView:{
    height:theme.height.height8,
    width:theme.width.width7,
    borderColor: theme.colors.grey,
    borderWidth:0.5,
    padding: theme.spacing.space5,
    alignSelf:'center'
  },
  addressView2:{
    height:theme.height.height8,
    width:theme.width.width7,
    backgroundColor:theme.colors.white,
    padding: theme.spacing.space5,
    alignSelf:'center'
  },
  addressText:{
fontSize:theme.text.text2,
color:theme.colors.black
  }
});
