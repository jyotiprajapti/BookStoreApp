import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import TopBar from '../components/TopBar';
import theme from '../utilities/StylingConstants';
import BookCard from '../components/BookCard';
import BottomBar from '../components/BottomBar';
import { AppContext } from '../context/Context';
const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const {setBookData,bookData} = useContext(AppContext);
  const bookstore = [];
  const fetchData = async () => {
    const items = await fetch(
      'https://bookstore-a5a0d-default-rtdb.firebaseio.com/BookStore.json',
    )
      .then(response => response.json())
      .then(json => json);
    Object.keys(items).forEach(val => bookstore.push(items[val]));
    setData(bookstore);
  };
  useEffect(() => {
    fetchData();
  }, []);
  

setBookData(data)

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <View style={styles.container2}>
        <View style={styles.textView}>
          <Text style={styles.text}>Books</Text>
          <Text style={styles.text2}>({data.length} items)</Text>
        </View>
        <ScrollView style={styles.books}>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => <BookCard {...item} />}
          />
          
        </ScrollView>
       
      </View>
     
      <View/>
      <BottomBar />
    </View>
  );
};

export default Home;

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
  textView: {
    flexDirection: 'row',
    gap: theme.spacing.space2,
    alignItems: 'center',
    marginVertical: theme.spacing.space3,
  },
  books: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: theme.height.height9
  },
});
