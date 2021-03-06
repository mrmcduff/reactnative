import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// justifyContent does vertical alignment
// alignItems does horizontal alignment
const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    height: 60,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
