import React, { useCallback, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, ModuleProgress } from '../types';
import { getModule } from '../data/modules';
import { getProgress } from '../services/ProgressService';
import { COLORS, SHADOW, RADIUS } from '../theme';
import ProgressBar from '../components/ProgressBar';

type Nav   = StackNavigationProp<RootStackParamList, 'ModuleDetail'>;
type Route = RouteProp<RootStackParamList, 'ModuleDetail'>;

interface Props { navigation: Nav; route: Route }

export default function ModuleScreen({ navigation, route }: Props) {
  const { moduleId } = route.params;
  const module = getModule(moduleId)!;
  const [progress, setProgress] = useState<ModuleProgress>({
    lessonsCompleted: [], exercisesCompleted: false, flashcardsCompleted: false, score: 0,
  });

  useFocusEffect(
    useCallback(() => {
      getProgress(moduleId).then(setProgress);
    }, [moduleId])
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: `Módulo ${module.number}`, headerStyle: { backgroundColor: module.color } });
  }, [navigation, module]);

  const totalLessons = module.lessons.length;
  const lessonsPct   = totalLessons > 0 ? progress.lessonsCompleted.length / totalLessons : 0;

  return (
    <View style={styles.container}>
      <View style={[styles.hero, { backgroundColor: module.color }]}>
        <Text style={styles.heroIcon}>{module.icon}</Text>
        <Text style={styles.heroTitle}>{module.title}</Text>
        <Text style={styles.heroSub}>{module.subtitle}</Text>
        <View style={styles.heroProgress}>
          <ProgressBar progress={lessonsPct} color="rgba(255,255,255,0.9)" showLabel />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        <Text style={styles.sectionTitle}>AULAS</Text>

        {totalLessons === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>Aulas disponíveis em breve</Text>
          </View>
        ) : module.lessons.map((lesson, i) => {
          const done = progress.lessonsCompleted.includes(i);
          return (
            <TouchableOpacity
              key={lesson.id}
              style={[styles.lessonCard, SHADOW]}
              onPress={() => navigation.navigate('LessonDetail', { moduleId, lessonIndex: i })}
              activeOpacity={0.85}
            >
              <View style={[styles.lessonNum, { backgroundColor: done ? module.color : COLORS.border }]}>
                <Text style={[styles.lessonNumText, { color: done ? COLORS.white : COLORS.textMuted }]}>
                  {done ? '✓' : String(i + 1)}
                </Text>
              </View>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonPoints}>{lesson.keyPoints.length} pontos-chave</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          );
        })}

        <Text style={styles.sectionTitle}>PRATICAR</Text>

        <View style={styles.actionRow}>
          <TouchableOpacity
            style={[styles.actionBtn, SHADOW, { borderColor: module.color }]}
            onPress={() => navigation.navigate('Flashcards', { moduleId })}
            activeOpacity={0.85}
          >
            <Text style={styles.actionIcon}>🃏</Text>
            <Text style={[styles.actionLabel, { color: module.color }]}>Flashcards</Text>
            {progress.flashcardsCompleted && <Text style={styles.doneBadge}>✓</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionBtn, SHADOW, { borderColor: module.color }]}
            onPress={() => navigation.navigate('Exercises', { moduleId })}
            activeOpacity={0.85}
          >
            <Text style={styles.actionIcon}>✏️</Text>
            <Text style={[styles.actionLabel, { color: module.color }]}>Exercícios</Text>
            {progress.exercisesCompleted && (
              <Text style={styles.doneBadge}>✓ {progress.score}%</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:      { flex: 1, backgroundColor: COLORS.background },
  hero:           { padding: 20, paddingTop: 24, paddingBottom: 28 },
  heroIcon:       { fontSize: 36, marginBottom: 8 },
  heroTitle:      { color: COLORS.white, fontSize: 20, fontWeight: '700', lineHeight: 26 },
  heroSub:        { color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: 4, marginBottom: 14, lineHeight: 18 },
  heroProgress:   { backgroundColor: 'rgba(0,0,0,0.15)', borderRadius: RADIUS.md, padding: 10 },
  scroll:         { padding: 16 },
  sectionTitle:   { fontSize: 11, fontWeight: '700', color: COLORS.textMuted, letterSpacing: 1.2, marginTop: 16, marginBottom: 10 },
  emptyBox:       { backgroundColor: COLORS.card, borderRadius: RADIUS.md, padding: 20, alignItems: 'center', ...SHADOW },
  emptyText:      { color: COLORS.textMuted, fontSize: 14 },
  lessonCard:     { backgroundColor: COLORS.card, borderRadius: RADIUS.md, marginBottom: 10, flexDirection: 'row', alignItems: 'center', padding: 14, gap: 12 },
  lessonNum:      { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  lessonNumText:  { fontWeight: '700', fontSize: 14 },
  lessonInfo:     { flex: 1 },
  lessonTitle:    { fontSize: 14, fontWeight: '600', color: COLORS.text },
  lessonPoints:   { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  chevron:        { fontSize: 22, color: COLORS.textMuted },
  actionRow:      { flexDirection: 'row', gap: 12 },
  actionBtn:      { flex: 1, backgroundColor: COLORS.card, borderRadius: RADIUS.lg, padding: 18, alignItems: 'center', gap: 6, borderWidth: 1.5 },
  actionIcon:     { fontSize: 26 },
  actionLabel:    { fontWeight: '700', fontSize: 14 },
  doneBadge:      { fontSize: 11, color: COLORS.success, fontWeight: '700' },
});
