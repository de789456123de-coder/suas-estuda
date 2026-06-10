import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { getModule } from '../data/modules';
import { markExercisesCompleted } from '../services/ProgressService';
import { COLORS, SHADOW, RADIUS } from '../theme';

type Nav   = StackNavigationProp<RootStackParamList, 'Exercises'>;
type Route = RouteProp<RootStackParamList, 'Exercises'>;
interface Props { navigation: Nav; route: Route }

export default function ExerciseScreen({ navigation, route }: Props) {
  const { moduleId } = route.params;
  const module = getModule(moduleId)!;
  const exercises = module.exercises;

  const [current, setCurrent]   = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore]       = useState(0);
  const [finished, setFinished] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerStyle: { backgroundColor: module.color } });
  }, [navigation, module]);

  if (exercises.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.empty}>Exercícios disponíveis em breve</Text>
      </View>
    );
  }

  const ex = exercises[current];

  function confirm() {
    if (selected === null) return;
    setConfirmed(true);
    if (selected === ex.correctIndex) setScore(s => s + 1);
  }

  async function next() {
    if (current + 1 >= exercises.length) {
      const finalScore = Math.round(((score + (selected === ex.correctIndex ? 1 : 0)) / exercises.length) * 100);
      await markExercisesCompleted(moduleId, finalScore);
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setConfirmed(false);
    }
  }

  if (finished) {
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <View style={styles.center}>
        <View style={[styles.resultCard, SHADOW]}>
          <Text style={styles.resultEmoji}>{pct >= 70 ? '🎉' : '📚'}</Text>
          <Text style={styles.resultTitle}>Resultado</Text>
          <Text style={[styles.resultScore, { color: module.color }]}>{pct}%</Text>
          <Text style={styles.resultSub}>{score}/{exercises.length} questões corretas</Text>
          <TouchableOpacity style={[styles.backBtn, { backgroundColor: module.color }]} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>Voltar ao Módulo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progressHeader, { backgroundColor: module.color }]}>
        <Text style={styles.progressText}>{current + 1}/{exercises.length}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${((current + 1) / exercises.length) * 100}%` }]} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={[styles.questionCard, SHADOW]}>
          <Text style={styles.questionText}>{ex.question}</Text>
        </View>

        {ex.options.map((opt, i) => {
          let bg = COLORS.card;
          let border = COLORS.border;
          if (confirmed) {
            if (i === ex.correctIndex) { bg = '#E8F5E9'; border = COLORS.success; }
            else if (i === selected)   { bg = '#FFEBEE'; border = COLORS.error; }
          } else if (i === selected) { border = module.color; bg = module.color + '12'; }

          return (
            <TouchableOpacity
              key={i}
              style={[styles.option, SHADOW, { backgroundColor: bg, borderColor: border }]}
              onPress={() => !confirmed && setSelected(i)}
              activeOpacity={confirmed ? 1 : 0.85}
            >
              <View style={[styles.optLetter, { backgroundColor: border }]}>
                <Text style={styles.optLetterText}>{['A','B','C','D'][i]}</Text>
              </View>
              <Text style={styles.optText}>{opt}</Text>
            </TouchableOpacity>
          );
        })}

        {confirmed && (
          <View style={[styles.explanationCard, SHADOW]}>
            <Text style={styles.explanationTitle}>💡 Explicação</Text>
            <Text style={styles.explanationText}>{ex.explanation}</Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: confirmed ? module.color : (selected !== null ? module.color : COLORS.border) }]}
          onPress={confirmed ? next : confirm}
          disabled={selected === null}
          activeOpacity={0.85}
        >
          <Text style={styles.actionBtnText}>{confirmed ? (current + 1 >= exercises.length ? 'Ver Resultado' : 'Próxima') : 'Confirmar'}</Text>
        </TouchableOpacity>

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:        { flex: 1, backgroundColor: COLORS.background },
  center:           { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  empty:            { color: COLORS.textMuted, fontSize: 15 },
  progressHeader:   { padding: 14, paddingBottom: 16 },
  progressText:     { color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: '600', marginBottom: 6, textAlign: 'right' },
  progressTrack:    { height: 4, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 2, overflow: 'hidden' },
  progressFill:     { height: '100%', backgroundColor: COLORS.white, borderRadius: 2 },
  scroll:           { padding: 16 },
  questionCard:     { backgroundColor: COLORS.card, borderRadius: RADIUS.lg, padding: 18, marginBottom: 16 },
  questionText:     { fontSize: 15, color: COLORS.text, lineHeight: 22, fontWeight: '600' },
  option:           { flexDirection: 'row', alignItems: 'center', borderRadius: RADIUS.md, padding: 14, marginBottom: 10, borderWidth: 1.5, gap: 12 },
  optLetter:        { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  optLetterText:    { color: COLORS.white, fontWeight: '700', fontSize: 13 },
  optText:          { flex: 1, fontSize: 14, color: COLORS.text, lineHeight: 20 },
  explanationCard:  { backgroundColor: '#FFF9C4', borderRadius: RADIUS.md, padding: 16, marginBottom: 16 },
  explanationTitle: { fontWeight: '700', fontSize: 14, color: COLORS.text, marginBottom: 6 },
  explanationText:  { fontSize: 13, color: COLORS.textSecondary, lineHeight: 19 },
  actionBtn:        { borderRadius: RADIUS.lg, padding: 16, alignItems: 'center' },
  actionBtnText:    { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  resultCard:       { backgroundColor: COLORS.card, borderRadius: RADIUS.xl, padding: 32, alignItems: 'center', width: '100%' },
  resultEmoji:      { fontSize: 48, marginBottom: 12 },
  resultTitle:      { fontSize: 18, fontWeight: '700', color: COLORS.text, marginBottom: 4 },
  resultScore:      { fontSize: 56, fontWeight: '700', marginVertical: 8 },
  resultSub:        { fontSize: 14, color: COLORS.textSecondary, marginBottom: 24 },
  backBtn:          { borderRadius: RADIUS.lg, paddingVertical: 14, paddingHorizontal: 32 },
  backBtnText:      { color: COLORS.white, fontWeight: '700', fontSize: 15 },
});
