import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { AppDevData,WebDevData,DeskDevData,TechSDevData} from '../../Data/Data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//Take in Value {Navigation} to use navigation.navigate()
function Feed({ navigation }) {
  const onAppServiceLinkPress = () => {
    navigation.navigate('AppDev')
  };
  const onWebServiceLinkPress = () => {
    navigation.navigate('WebDev')
  };
  const onDeskServiceLinkPress = () => {
    navigation.navigate('DeskDev')
  };
  const onTechServiceLinkPress = () => {
    navigation.navigate('TechSDev')
  };
  return (
    <SafeAreaView>
      <FlatList
        data={AppDevData}
        contentInset={{ padding: 5 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.options}
              onPress={onAppServiceLinkPress}>
              <View>
                <Text
                  style={
                    (styles.text,
                    { fontSize: 16, fontWeight: 'bold', margin: 3.3 })
                  }>
                  {item.category}
                </Text>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.typeOfService}</Text>
              </View>
              <Image style={styles.images} source={item.image} />
            </TouchableOpacity>
          );
        }}></FlatList>
      ,
      <FlatList
        data={WebDevData}
        contentInset={{ padding: 0.5 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.options}
              onPress={onWebServiceLinkPress}>
              <View style={{ padding: 5 }}>
                <Text
                  style={
                    (styles.text,
                    { fontSize: 16, fontWeight: 'bold', margin: 3.3 })
                  }>
                  {item.category}
                </Text>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.typeOfService}</Text>
              </View>
              <Image style={styles.images} source={item.image} />
            </TouchableOpacity>
          );
        }}></FlatList>
      ,
      <FlatList
        data={DeskDevData}
        contentInset={{ padding: 0.5 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.options}
              onPress={onDeskServiceLinkPress}>
              <View style={{ padding: 5 }}>
                <Text
                  style={
                    (styles.text,
                    { fontSize: 16, fontWeight: 'bold', margin: 3.3 })
                  }>
                  {item.category}
                </Text>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.typeOfService}</Text>
              </View>
              <Image style={styles.images} source={item.image} />
            </TouchableOpacity>
          );
        }}></FlatList>
      ,
      <FlatList
        data={TechSDevData}
        contentInset={{ padding: 0.5 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.options}
              onPress={onTechServiceLinkPress}>
              <View style={{ padding: 5 }}>
                <Text
                  style={
                    (styles.text,
                    { fontSize: 16, fontWeight: 'bold', margin: 3.3 })
                  }>
                  {item.category}
                </Text>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.typeOfService}</Text>
              </View>
              <Image style={styles.images} source={item.image} />
            </TouchableOpacity>
          );
        }}></FlatList>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  images: {
    height: 69,
    width: 69,
    position: 'absolute',
    right: 0,
    margin: 10,
    bottom: 0,
  },
  options: {
    marginHorizontal: 3,
    marginTop: 0.5,
    backgroundColor: 'white',
    borderRadius: 1,
    height: windowHeight * 0.17,
  },
  text: {
    fontSize: 14,
    margin: 3,
  },
});

export default Feed;
