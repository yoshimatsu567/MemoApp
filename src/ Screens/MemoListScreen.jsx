import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../Components/AppBar';
import MemoList from '../Components/MemoList';
import CircleButton from '../Components/CircleButton';

export default function MemoListScreen() {
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
