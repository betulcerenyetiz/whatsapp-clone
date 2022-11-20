import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import Tabs from './Tabs';
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>WhatsApp</Text>
        </View>
        <View style={styles.iconWrapper}>
          <IconFontisto
            style={styles.searchIcon}
            name="search"
            size={18}
            color="white"
          />
          <IconEntypo name="dots-three-vertical" size={18} color="white" />
        </View>
      </View>
      <Tabs />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#075e54',
    height: 90,
    width: '100%',
  },
  topWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
  },
  titleText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
    marginTop: 5,
  },
  titleWrapper: {
    flex: 1,
    left: 16,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    right: 16,
  },
  searchIcon: {
    left: -16,
  },
});
