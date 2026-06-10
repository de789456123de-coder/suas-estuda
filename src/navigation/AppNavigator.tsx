import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { COLORS } from '../theme';

import HomeScreen     from '../screens/HomeScreen';
import ModuleScreen   from '../screens/ModuleScreen';
import LessonScreen   from '../screens/LessonScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import FlashcardScreen from '../screens/FlashcardScreen';
import SimuladoScreen  from '../screens/SimuladoScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: '700', fontSize: 17 },
        cardStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen name="Home"         component={HomeScreen}      options={{ title: 'SUAS Estuda' }} />
      <Stack.Screen name="ModuleDetail" component={ModuleScreen}    options={{ title: 'Módulo' }} />
      <Stack.Screen name="LessonDetail" component={LessonScreen}    options={{ title: 'Aula' }} />
      <Stack.Screen name="Exercises"    component={ExerciseScreen}  options={{ title: 'Exercícios' }} />
      <Stack.Screen name="Flashcards"   component={FlashcardScreen} options={{ title: 'Flashcards' }} />
      <Stack.Screen name="Simulado"     component={SimuladoScreen}  options={{ title: 'Simulado Final' }} />
    </Stack.Navigator>
  );
}
