import {
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../utilities/StylingConstants';
import RecentlySearched from '../components/RecentlySearched';
import BottomBar from '../components/BottomBar';
const Search = ({navigation}) => {
  const [search, setSearch] = useState('');
  const arr = [
    {name: 'jyoti'},
    {name: 'jyoti'},
    {name: 'jyoti'},
    {name: 'jyoti'},
    {name: 'jyoti'},
  ];
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color={theme.colors.black} />
        </TouchableOpacity>
        <View style={styles.search}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SearchResult', {search: search})
            }>
            <AntDesign
              name="search1"
              size={26}
              color={theme.colors.grey}
              style={{margin: theme.spacing.space1}}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search..."
            value={search}
            placeholderTextColor={theme.colors.grey}
            onChangeText={text => setSearch(text)}
            style = {{color: 'black'}}
          />
        </View>
        <Text style={styles.text}>Recently Searched</Text>

        <ScrollView>
          <FlatList
            data={arr}
            renderItem={({item}) => (
              <RecentlySearched book="Dont make me think" />
            )}
          />
        </ScrollView>
      </View>
      <BottomBar />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    margin: theme.spacing.space2,
  },
  search: {
    margin: theme.spacing.space2,
    height: theme.height.height3,
    borderColor: theme.colors.maroon,
    borderWidth: 1,
    borderRadius: theme.spacing.space1,
    padding: theme.spacing.space1,
    flexDirection: 'row',
    gap: theme.spacing.space3,
  },
  text: {
    color: theme.colors.grey,
    fontSize: theme.spacing.space4,
    margin: theme.spacing.space3,
    fontWeight: 'bold',
  },
});
