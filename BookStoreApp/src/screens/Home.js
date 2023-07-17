import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import theme from '../utilities/StylingConstants';
import BookCard from '../components/BookCard';
import BottomBar from '../components/BottomBar';

const Home = ({navigation}) => {
  const arr = [
    {name: 'jyoti'},
    {name: 'jyoti'},
    {name: 'jyoti'},
    {name: 'jyoti'},
    {name: 'jyoti'},
    {name: 'jyoti'},
    {name: 'jyoti'},
  ];
 
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <View style={styles.container2}>
        <View style={styles.textView}>
          <Text style={styles.text}>Books</Text>
          <Text style={styles.text2}>(128 items)</Text>
        </View>
        <ScrollView style={styles.books}>
          <FlatList
            numColumns={2}
            key={2}
            data={arr}
            renderItem={({item}) => (
              <BookCard
                price={20}
                title={'Dont MAke me think'}
                writer={'Steve krug'}
              />
            )}
          />
        </ScrollView>
      </View>
      <BottomBar />
      <View style={{paddingBottom: 10}} />
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
  },
});
