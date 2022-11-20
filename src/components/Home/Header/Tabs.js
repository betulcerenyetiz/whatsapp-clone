import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {tabs} from '../../../assets/ChatsData';
const Tabs = () => {
  const [selected, setselected] = useState('CHATS');

  return (
    <View style={styles.container}>
      {tabs &&
        tabs.map((tab, i) => (
          <TouchableOpacity key={i} onPress={() => setselected(tab)}>
            <Text style={tab === selected ? styles.selectedTab : styles.tab}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 27,
  },
  tab: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    width: 100,
  },
  selectedTab: {
    color: 'white',
    width: 100,
    fontWeight: '800',
    fontSize: 14,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    textAlign: 'center',
  },
});
