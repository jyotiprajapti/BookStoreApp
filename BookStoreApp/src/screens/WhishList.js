import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import TopBar from '../components/TopBar';
import theme from '../utilities/StylingConstants';
import BookCard from '../components/BookCard';
import BottomBar from '../components/BottomBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../context/Context';
const Whishlist = ({navigation}) => {
 
  const {whishlist,removeFromWhishlist} = useContext(AppContext)

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.container2}>
        <View style={styles.textView}>
          <TouchableOpacity onPress={()=>navigation.goBack()} >
            <Ionicons name="arrow-back" size={30} color={theme.colors.black} />
          </TouchableOpacity>
          <Text style={styles.text}>Whishlist</Text>
          <Text style={styles.text2}>({whishlist.length})</Text>
        </View>
        <ScrollView style={styles.books}>
          <FlatList
            numColumns={2}
            key={2}
            data={whishlist}
            renderItem={({item}) => <BookCard {...item} />}
          />
        </ScrollView>
      </View>
      <BottomBar />
      <View style={{paddingBottom: 10}} />
    </View>
  );
};

export default Whishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    marginLeft: theme.spacing.space2,
    height:"88%"
  },
  text: {
    fontSize: theme.text.text3,
    color: theme.colors.black,
  },
  text2: {
    fontSize: theme.text.text2,
    color: theme.colors.grey,
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
});
