import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type DreamProps = {
  dream: {
    title: string;
    description: string;
    date: string;
    day: string;
    time?: string;
  };
};

const DreamCard: React.FC<DreamProps> = ({ dream }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>Lucid Dream 🌙</Text>
      <Text style={styles.title}>{dream.title}</Text>
      <Text style={styles.description}>{dream.description}</Text>
      <Text style={styles.date}>
        {dream.day}, {dream.date}{dream.time ? ` • ${dream.time}` : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    margin: 8,
    padding: 12,
    backgroundColor: '#fffbe6',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0d879',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'space-between',
  },
  header: { fontSize: 14, fontWeight: '600', color: '#444', marginBottom: 4 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  description: { fontSize: 13, color: '#333', flexShrink: 1 },
  date: { fontSize: 11, color: '#666', marginTop: 8, textAlign: 'right' },
});

export default DreamCard;
