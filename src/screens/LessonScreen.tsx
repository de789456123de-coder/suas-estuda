import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { getModule } from '../data/modules';
import { markLessonCompleted } from '../services/ProgressService';
import { COLORS, SHADOW, RADIUS } from '../theme';

type Nav   = StackNavigationProp<RootStackParamList, 'LessonDetail'>;
type Route = RouteProp<RootStackParamList, 'LessonDetail'>;

interface Props { navigation: Nav; route: Route }

export default function LessonScreen({ navigation, route }: Props) {
  const { moduleId, lessonIndex } = route.params;
  const module = getModule(moduleId)!;
  const lesson = module.lessons[lessonIndex];

  useEffect(() => {
    navigation.setOptions({
      title: `Aula ${lessonIndex + 1}`,
      headerStyle: { backgroundColor: module.color },
    });
  }, [navigation, module, lessonIndex]);

  async function handleComplete() {
    await markLessonCompleted(moduleId, lessonIndex);
    navigation.goBack();
  }

  if (!lesson) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Aula não encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={[styles.titleCard, { backgroundColor: module.color }]}>
          <Text style={styles.lessonNum}>Aula {lessonIndex + 1} de {module.lessons.length}</Text>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
        </View>

        <View style={[styles.contentCard, SHADOW]}>
          <Text style={styles.contentText}>{lesson.content}</Text>
        </View>

        {lesson.keyPoints.length > 0 && (
          <View style={[styles.keyCard, SHADOW]}>
            <Text style={styles.keyHeader}>📌 Pontos-Chave</Text>
            {lesson.keyPoints.map((pt, i) => (
              <View key={i} style={styles.keyItem}>
                <View style={[styles.keyDot, { backgroundColor: module.color }]} />
                <Text style={styles.keyText}>{pt}</Text>
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity
          style={[styles.doneBtn, { backgroundColor: module.color }]}
          onPress={handleComplete}
          activeOpacity={0.85}
        >
          <Text style={styles.doneBtnText}>✓ Marcar como concluída</Text>
        </TouchableOpacity>

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: COLORS.background },
  center:       { flex: 1, alignItems: 'center', justifyContent: 'center' },
  errorText:    { color: COLORS.textMuted, fontSize: 16 },
  scroll:       { padding: 16 },
  titleCard:    { borderRadius: RADIUS.lg, padding: 20, marginBottom: 16 },
  lessonNum:    { color: 'rgba(255,255,255,0.75)', fontSize: 12, fontWeight: '600', marginBottom: 6 },
  lessonTitle:  { color: COLORS.white, fontSize: 20, fontWeight: '700', lineHeight: 26 },
  contentCard:  { backgroundColor: COLORS.card, borderRadius: RADIUS.lg, padding: 18, marginBottom: 16 },
  contentText:  { fontSize: 15, color: COLORS.text, lineHeight: 24 },
  keyCard:      { backgroundColor: COLORS.card, borderRadius: RADIUS.lg, padding: 18, marginBottom: 20 },
  keyHeader:    { fontSize: 15, fontWeight: '700', color: COLORS.text, marginBottom: 14 },
  keyItem:      { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 10 },
  keyDot:       { width: 8, height: 8, borderRadius: 4, marginTop: 6, flexShrink: 0 },
  keyText:      { flex: 1, fontSize: 14, color: COLORS.textSecondary, lineHeight: 20 },
  doneBtn:      { borderRadius: RADIUS.lg, padding: 16, alignItems: 'center' },
  doneBtnText:  { color: COLORS.white, fontSize: 16, fontWeight: '700' },
});
