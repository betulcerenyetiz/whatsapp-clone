import React from 'react';
import {ScrollView,  View} from 'react-native';

import ChatList from './ChatList/ChatList';
import Header from './Header/Header';
const HomePage = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <ChatList />
      </ScrollView>
    </View>
  );
};

export default HomePage;
