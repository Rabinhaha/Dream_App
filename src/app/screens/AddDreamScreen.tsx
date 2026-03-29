import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { DreamContext } from '../context/DreamContext';
import { useNavigation } from '@react-navigation/native';

const AddDreamScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addDream } = useContext(DreamContext);
  const navigation = useNavigation();

  const handleSave = () => {
    if (title.trim()) {
      const now = new Date();

      // Format date and day
      const dateString = now.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const dayString = now.toLocaleDateString(undefined, { weekday: 'long' });

      addDream({ title, description, date: dateString, day: dayString });
      navigation.goBack(); // return to Home after saving
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Dream title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Dream description"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.multiline]}
        multiline
      />
      <Button title="Save Dream" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  multiline: { height: 100, textAlignVertical: 'top' },
});

export default AddDreamScreen;
