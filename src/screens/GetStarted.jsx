import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {THEME_COLOR_2, THEME_COLOR_1} from '../assests/constants';
//

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image
          style={styles.logo}
          source={require('../assests/images/logo.png')}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.title}>SAYLANI WELFARE</Text>
        <Text style={styles.subTitle}>ONLINE DISCOUNT STORE</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ffff"
  },
  logoView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: responsiveWidth(100),
    height: responsiveHeight(50),
    // backgroundColor: 'grey',
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: responsiveFontSize(4.5),
    fontWeight: 700,
    color: THEME_COLOR_1,
  },
  subTitle: {
    fontSize: responsiveFontSize(2),
    color: THEME_COLOR_2,
    fontWeight: 600,
    marginTop: 10,
  },
  btn: {
    backgroundColor: THEME_COLOR_1,
    width: responsiveWidth(40),
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: 700,
    color: '#FFFFFF',
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    marginLeft: responsiveWidth(30),
  },
});
