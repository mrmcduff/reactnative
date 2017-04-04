import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC5bXfys91bHJnMK0K1vpxnWRqt7ERL7ac',
      authDomain: 'manager-46417.firebaseapp.com',
      databaseURL: 'https://manager-46417.firebaseio.com',
      projectId: 'manager-46417',
      storageBucket: 'manager-46417.appspot.com',
      messagingSenderId: '72008678352'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;