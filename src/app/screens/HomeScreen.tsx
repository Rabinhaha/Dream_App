import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import DreamCard from '../components/DreamCard';
import AddDreamButton from '../components/AddDreamButton';
import { DreamContext } from '../context/DreamContext';

const HomeScreen = () => {
  const { dreams } = useContext(DreamContext);

  return (
    <View style={styles.container}>
      <FlatList
  data={dreams}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => <DreamCard dream={item} />}
  numColumns={2}   // ✅ shows cards side by side
  contentContainerStyle={{ padding: 10 }}
/>

      <AddDreamButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

export default HomeScreen;
