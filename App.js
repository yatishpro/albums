/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <Header heading="Albums" />
        <AlbumList />
      </View>
    );
  }
}

export default App;

