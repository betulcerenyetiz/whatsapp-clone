import React from 'react';
import {StyleSheet, View} from 'react-native';

import ChatListItem from './ChatListItem';
import {chatList} from '../../../assets/ChatsData';
const ChatList = () => {
  return (
    <View style={styles.container}>
      {chatList &&
        chatList.map((chat, i) => <ChatListItem key={i} chat={chat} />)}
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
})
