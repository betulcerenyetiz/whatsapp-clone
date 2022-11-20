import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const Header = ({receiver}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <View style={styles.titleWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              style={styles.backIcon}
              name="arrow-back"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: receiver?.profileImgUrl,
              }}
            />
          </View>
          <Text style={styles.titleText}>
            {receiver?.firstName} {receiver?.lastName}
          </Text>
        </View>
        <View style={styles.iconWrapper}>
          <FontAwesome
            style={styles.videoIcon}
            name="video-camera"
            size={20}
            color="white"
          />
          <Ionicons
            style={styles.callIcon}
            name="call"
            size={20}
            color="white"
          />
          <IconEntypo name="dots-three-vertical" size={18} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#075e54',
    width: '100%',
  },
  topWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
  },
  titleText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 8,
  },
  titleWrapper: {
    flex: 1,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    right: 16,
  },
  videoIcon: {
    left: -48,
  },
  callIcon: {
    left: -24,
  },
  backIcon: {
    marginRight: 4,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
