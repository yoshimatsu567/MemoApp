import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarTitle}>Memo App</Text>
        <Text style={styles.appBarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: 'rgba(34, 34, 34, 1)',
    justifyContent: 'flex-end',
  },
  appBarInner: {
    alignItems: 'center',
  },
  appBarRight: {
    position: 'absolute',
    color: '#FFEE58',
    right: 19,
    bottom: 16,
  },
  appBarTitle: {
    marginBottom: 8,
    lineHeight: 32,
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
