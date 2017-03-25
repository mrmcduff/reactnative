import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const BookDetail = ({ book }) => {
  const { title, artist, thumbnail_image, image } = book;
  const {
    bodyImageStyle,
    headerImageStyle,
    headerContentStyle,
    headerImageContainerStyle,
    titleStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerImageContainerStyle}>
          <Image
            style={headerImageStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={bodyImageStyle}
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 18
  },
  headerImageStyle: {
    height: 50,
    width: 50
  },
  headerImageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  bodyImageStyle: {
    height: 300,
    flex: 1,
    width: null,
    marginLeft: 10,
    marginRight: 10
  }
};

export default BookDetail;
