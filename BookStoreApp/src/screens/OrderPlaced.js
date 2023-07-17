import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TopBar from '../components/TopBar';
import Ordered from '../assets/images/Group 4218';
import theme from '../utilities/StylingConstants';
import BottomBar from '../components/BottomBar';
import Email from '../assets/images/email';
import Contact from '../assets/images/contact';
import Address from '../assets/images/Address';
const OrderPlaced = ({navigation}) => {
  return (
    <View>
      <TopBar navigation={navigation} />
      <View style={styles.container}>
        <Ordered />
        <Text style={styles.text}>
          hurray!!! your order is confirmed the order id is #123456 save the
          order id for further communication..
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.contact}>
            <Email />
            <Text style={styles.text2}>admin@bookstore.com</Text>
          </View>
          <View style={styles.contact}>
            <Contact />
            <Text style={styles.text2}>+91 8163475881</Text>
          </View>
        </View>
        <View style={styles.contact}>
          <Address />
          <Text style={styles.text2}>
            42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
            Kumarakom restaurant, HSR Layout, Bangalore 560034
          </Text>
        </View>
      </View>
      <BottomBar />
    </View>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.space7,
    backgroundColor: theme.colors.offWhite,
  },
  text: {
    color: theme.colors.grey,
    fontSize: theme.spacing.space5,
    textAlign: 'center',
    margin: theme.spacing.space5,
  },
  button: {
    backgroundColor: theme.colors.maroon,
    height: theme.height.height3,
    width: theme.width.width7,
    borderRadius: theme.spacing.space1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: theme.spacing.space4,
  },
  text2: {
    color: theme.colors.grey,
  },
  contact: {
    flexDirection: 'row',
    margin: theme.spacing.space3,
    gap: theme.spacing.space3,
  },
});
