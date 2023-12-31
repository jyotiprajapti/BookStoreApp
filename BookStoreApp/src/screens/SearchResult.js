import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import TopBar from '../components/TopBar';
import theme from '../utilities/StylingConstants';
import BookCard from '../components/BookCard';
import BottomBar from '../components/BottomBar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchResult = ({navigation, route}) => {
  const searchData = route.params.searchData;
  const search= route.params.search;
  
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.container2}>
        <View style={styles.textView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color={theme.colors.black} />
          </TouchableOpacity>
          <Text style={styles.text}>Showing results for </Text>
          <Text style={styles.text2}>{search}</Text>
        </View>
        <ScrollView style={styles.books}>
          <FlatList
            numColumns={2}
            key={2}
            data={searchData}
            renderItem={({item}) => <BookCard {...item} />}
          />
        </ScrollView>
      </View>
      <BottomBar />
      <View style={{paddingBottom: 10}} />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    marginLeft: theme.spacing.space2,
   height: '88%'
  },
  text: {
    fontSize: theme.text.text3,

    color: theme.colors.grey,
  },
  text2: {
    fontSize: theme.text.text2,
    color: theme.colors.black,
    marginLeft: theme.spacing.space7,
  },
  textView: {
    flexDirection: 'row',
    gap: theme.spacing.space2,
    alignItems: 'center',
    marginVertical: theme.spacing.space3,
    flexWrap: 'wrap',
  },
  books: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
