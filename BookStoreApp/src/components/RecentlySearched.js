import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../utilities/StylingConstants';
const RecentlySearched = ({book}) => {
  return <Text style={styles.container}>{book}</Text>;
};

export default RecentlySearched;

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.space4,
    marginHorizontal: theme.spacing.space3,
    color: theme.colors.black,
    borderBottomColor: theme.colors.grey,
    borderBottomWidth: 0.6
  },
});
