import React from 'react';
import { DreamProvider } from './src/app/context/DreamContext';
import AppNavigator from './src/app/navigation/AppNavigator';

export default function App() {
  return (
    <DreamProvider>
      <AppNavigator />
    </DreamProvider>
  );
}
