import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const MessageInputArea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Entypo
          style={styles.smileIcon}
          name="emoji-happy"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} placeholder="Message..." />
      </View>
      <View style={styles.iconWrapper}>
        <Ionicons style={styles.backIcon} name="send" size={24} color="white" />
      </View>
    </View>
  );
};

export default MessageInputArea;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 4,
    position: 'absolute',
    bottom: 3,
  },
  inputBox: {
    backgroundColor: 'white',
    width: '85%',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 35,
  },
  iconWrapper: {
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2%',
    backgroundColor: '#075e54',
    borderRadius: 30,
  },
  input: {
    width: '85%',
  },
  smileIcon: {
    marginRight: 18,
    left: 8,
    color: 'gray',
  },
});
