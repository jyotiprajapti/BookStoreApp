import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Close from '../assets/images/Close';
import theme from '../utilities/StylingConstants';
const AddressModal = ({visible, handleModalVisible, onClose}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [landmark, SetLandmark] = useState('');
  const [data, setData] = useState({});
  const handleDataChange = data => {
    setData(data);
  };

  const handleSaveData = () => {
    handleModalVisible(data);
    onClose();
  };
  return (
    <View style={styles.centerdView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={handleModalVisible}>
        <View style={styles.centerdView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={handleSaveData}>
              <Close />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                handleDataChange({
                  name: name,
                  phone: phone,
                  pincode: pincode,
                  locality: locality,
                  address: address,
                  landmark: landmark,
                })
              }>
              <Text style={styles.buttonText}>SAVE ADDRESS</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>Customer details</Text>
            <ScrollView>
              <View style={styles.textInputView}>
                <TextInput
                  value={name}
                  style={styles.input1}
                  onChangeText={text => setName(text)}
                  placeholder="Name"
                  placeholderTextColor={'grey'}
                />
                <TextInput
                  value={phone}
                  style={styles.input1}
                  onChangeText={text => setPhone(text)}
                  placeholder="Phone number"
                  placeholderTextColor={'grey'}
                />
                <TextInput
                  value={pincode}
                  style={styles.input1}
                  onChangeText={text => setPincode(text)}
                  placeholder="Pincode"
                  placeholderTextColor={'grey'}
                />
                <TextInput
                  value={locality}
                  style={styles.input1}
                  onChangeText={text => setLocality(text)}
                  placeholder="Locality"
                  placeholderTextColor={'grey'}
                />
                <TextInput
                  style={styles.input2}
                  value={address}
                  onChangeText={text => setAddress(text)}
                  placeholder="Address"
                  placeholderTextColor={'grey'}
                />
                <TextInput
                  style={styles.input1}
                  value={landmark}
                  onChangeText={text => SetLandmark(text)}
                  placeholder="Landmark"
                  placeholderTextColor={'grey'}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centerdView: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modalView: {
    backgroundColor: 'white',
    paddingRight: theme.spacing.xxl,
    paddingLeft: theme.spacing.l,
    shadowColor: theme.colors.text1,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: theme.spacing.l,
  },
  text1: {
    color: theme.colors.grey,
    fontSize: theme.spacing.space6,
    padding: theme.spacing.space2,
  },
  touchable: {
    flexDirection: 'row',
    marginVertical: theme.spacing.m,
  },
  textInputView: {
    padding: theme.spacing.space5,
    gap: theme.spacing.space2,
  },
  input1: {
    height: theme.height.height3,
    width: theme.width.width6,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    color: theme.colors.black,
  },
  input2: {
    height: theme.height.height6,
    width: theme.width.width6,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    color: theme.colors.black,
  },
  button: {
    backgroundColor: theme.colors.maroon,
    width: theme.width.width3,
    alignSelf: 'center',
    marginTop: theme.spacing.space1,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default AddressModal;
