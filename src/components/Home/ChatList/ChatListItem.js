import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const ChatListItem = ({chat}) => {
  const {receiver, messages} = chat;
  const navigation = useNavigation();
  const press = () => {
    navigation.navigate('Chat', {
      receiver,
      messages,
    });
  };
  return (
    <TouchableOpacity onPress={press}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: receiver?.profileImgUrl,
            }}
          />
        </View>
        <View style={styles.titleAndTextWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>
              {receiver?.firstName} {receiver?.lastName}
            </Text>
            <Text style={styles.titleTime}>
              {new Date(messages[messages?.length - 1]?.datetime).getHours()}:
              {new Date(messages[messages?.length - 1]?.datetime).getMinutes()}
            </Text>
          </View>
          <Text style={styles.msgText}>
            {messages[messages?.length - 1]?.text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: '5%',
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleWrapper: {
    flexDirection: 'row',
  },
  titleAndTextWrapper: {
    marginLeft: 16,
    width: '100%',
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    flex: 1,
  },
  titleTime: {
    width: '30%',
    alignItems: 'center',
  },
  msgText: {
    fontSize: 14,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
