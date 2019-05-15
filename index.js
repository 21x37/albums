// Import a libray to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create a component
const App = () => (
    <Header headerText={'Albums'} />
);



// Render component
AppRegistry.registerComponent('albums', () => App);