import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TopBar from '../components/TopBar';
import theme from '../utilities/StylingConstants';
import Add from '../assets/images/Add';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BagCard from '../components/BagCard';
import BottomBarBag from '../components/BottomBarBag';
import AddressModal from '../components/AddressModal';

const MyBag = ({navigation}) => {
  const arr = [{name: 'jyoti'}];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.container2}>
        <View style={styles.textView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color={theme.colors.black} />
          </TouchableOpacity>
          <Text style={styles.text}>My Bag</Text>
          <Text style={styles.text2}>(5 items)</Text>
        </View>
        <ScrollView style={styles.books}>
          <FlatList
            data={arr}
            renderItem={({item}) => (
              <BagCard
                book={'Dont MAke me think'}
                price={200}
                writer={'jyoti'}
                number={2}
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
      {isModalVisible && (
        <AddressModal
          handleModalVisible={handleModalVisible}
          visible={isModalVisible}
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
});
