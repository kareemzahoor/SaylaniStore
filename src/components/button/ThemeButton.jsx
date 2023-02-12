import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ThemeButton = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>Get Started</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default ThemeButton;
