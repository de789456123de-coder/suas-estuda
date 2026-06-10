import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, StatusBar,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ModuleId, ModuleProgress } from '../types';
import { MODULES } from '../data/modules';
import { getProgress } from '../services/ProgressService';
import { COLORS, SHADOW, RADIUS } from '../theme';
import ProgressBar from '../components/ProgressBar';

type Nav = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props { navigation: Nav }

export default function HomeScreen({ navigation }: Props) {
  const [progresses, setProgresses] = useState<Record<string, ModuleProgress>>({});

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const entries = await Promise.all(
          MODULES.map(async m => [m.id, await getProgress(m.id as ModuleId)])
        );
        setProgresses(Object.fromEntries(entries));
      })();
    }, [])
  );

  function calcPct(moduleId: string): number {
    const p = progresses[moduleId];
    const m = MODULES.find(x => x.id === moduleId);
    if (!p || !m) return 0;
    const totalLessons = m.lessons.length;
    const done = (totalLessons > 0 ? p.lessonsCompleted.length / totalLessons : 0)
               + (p.exercisesCompleted ? 1 : 0)
               + (p.flashcardsCompleted ? 1 : 0);
    return done / (3);
  }

  const totalPct = MODULES.length > 0
    ? MODULES.reduce((acc, m) => acc + calcPct(m.id), 0) / MODULES.length
    : 0;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryDark} barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>SUAS Estuda</Text>
        <Text style={styles.headerSub}>Educador Social — Concurso Público</Text>
        <View style={styles.overallBox}>
          <Text style={styles.overallLabel}>Progresso Geral</Text>
          <ProgressBar progress={totalPct} color={COLORS.accentLight} showLabel />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        <Text style={styles.sectionTitle}>MÓDULOS DE ESTUDO</Text>

        {MODULES.map(m => {
          const pct = calcPct(m.id);
          return (
            <TouchableOpacity
              key={m.id}
              style={[styles.card, SHADOW]}
              onPress={() => navigation.navigate('ModuleDetail', { moduleId: m.id as ModuleId })}
              activeOpacity={0.85}
            >
              <View style={[styles.cardAccent, { backgroundColor: m.color }]} />
              <View style={styles.cardBody}>
                <View style={styles.cardHeader}>
                  <View style={[styles.iconBox, { backgroundColor: m.color + '18' }]}>
                    <Text style={styles.icon}>{m.icon}</Text>
                  </View>
                  <View style={styles.cardTitles}>
                    <Text style={styles.cardNum}>Módulo {m.number}</Text>
                    <Text style={styles.cardTitle} numberOfLines={2}>{m.title}</Text>
                  </View>
                </View>
                <Text style={styles.cardSub} numberOfLines={2}>{m.subtitle}</Text>
                <View style={styles.cardFooter}>
                  <ProgressBar progress={pct} color={m.color} showLabel />
                  <Text style={styles.lessonCount}>
                    {m.lessons.length} aula{m.lessons.length !== 1 ? 's' : ''}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        <Text style={styles.sectionTitle}>REVISÃO RÁPIDA</Text>

        <View style={styles.quickRow}>
          <TouchableOpacity
            style={[styles.quickBtn, { backgroundColor: COLORS.primary }]}
            onPress={() => navigation.navigate('Flashcards', {})}
            activeOpacity={0.85}
          >
            <Text style={styles.quickIcon}>🃏</Text>
            <Text style={styles.quickLabel}>Flashcards{'\n'}Todos os Módulos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickBtn, { backgroundColor: COLORS.accent }]}
            onPress={() => navigation.navigate('Simulado')}
            activeOpacity={0.85}
          >
            <Text style={styles.quickIcon}>📝</Text>
            <Text style={styles.quickLabel}>Simulado{'\n'}Final</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, backgroundColor: COLORS.background },
  header:       { backgroundColor: COLORS.primary, paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24 },
  headerTitle:  { color: COLORS.white, fontSize: 26, fontWeight: '700' },
  headerSub:    { color: COLORS.primaryLight, fontSize: 13, marginTop: 2, marginBottom: 14 },
  overallBox:   { backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: RADIUS.md, padding: 12 },
  overallLabel: { color: COLORS.white, fontSize: 12, fontWeight: '600', marginBottom: 6 },
  scroll:       { padding: 16 },
  sectionTitle: { fontSize: 11, fontWeight: '700', color: COLORS.textMuted, letterSpacing: 1.2, marginTop: 20, marginBottom: 10 },
  card:         { backgroundColor: COLORS.card, borderRadius: RADIUS.lg, marginBottom: 14, flexDirection: 'row', overflow: 'hidden' },
  cardAccent:   { width: 5 },
  cardBody:     { flex: 1, padding: 14 },
  cardHeader:   { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 12 },
  iconBox:      { width: 44, height: 44, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center' },
  icon:         { fontSize: 22 },
  cardTitles:   { flex: 1 },
  cardNum:      { fontSize: 11, color: COLORS.textMuted, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },
  cardTitle:    { fontSize: 15, fontWeight: '700', color: COLORS.text, marginTop: 1 },
  cardSub:      { fontSize: 12, color: COLORS.textSecondary, marginBottom: 10, lineHeight: 17 },
  cardFooter:   { flexDirection: 'row', alignItems: 'center', gap: 10 },
  lessonCount:  { fontSize: 11, color: COLORS.textMuted },
  quickRow:     { flexDirection: 'row', gap: 12 },
  quickBtn:     { flex: 1, borderRadius: RADIUS.lg, padding: 18, alignItems: 'center', gap: 8 },
  quickIcon:    { fontSize: 28 },
  quickLabel:   { color: COLORS.white, fontWeight: '700', fontSize: 13, textAlign: 'center', lineHeight: 18 },
});
