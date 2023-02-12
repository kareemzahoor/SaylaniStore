import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveFontSize, responsiveWidth} from 'react-native-responsive-dimensions';
import {THEME_COLOR_1, THEME_COLOR_2} from '../assests/constants';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.title}>SAYLANI WELFARE</Text>
        <Text style={styles.subTitle}>ONLINE DISCOUNT STORE</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.subTitle}>Already have an account? Login</Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
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
    marginTop: 5,
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
