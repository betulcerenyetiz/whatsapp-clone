import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Header from './Header';
import MessageArea from './MessageArea';
import MessageInputArea from './MessageInputArea';

const Chat = () => {
  const route = useRoute();
  const {receiver, messages} = route?.params;

  return (
    <View style={styles.container}>
      <Header receiver={receiver} />
      <MessageArea messages={messages} style={styles.messageArea} />
      <MessageInputArea style={styles.messageInputArea} />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
