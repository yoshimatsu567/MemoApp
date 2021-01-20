import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/Components/AppBar';
import MemoList from './src/Components/MemoList';
import CircleButton from './src/Components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
