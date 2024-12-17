import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotificationCard({ title, body }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, padding: 15, borderRadius: 5, marginVertical: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  body: { fontSize: 14, color: '#555' },
});
