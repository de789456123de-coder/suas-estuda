import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  Animated, Dimensions,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { MODULES } from '../data/modules';
import { SimuladoQuestion, QuestionResult, shuffleQuestions } from '../data/simulado';
import { COLORS, SHADOW, RADIUS } from '../theme';

type Nav = StackNavigationProp<RootStackParamList, 'Simulado'>;
interface Props { navigation: Nav }

const TEMPO_POR_QUESTAO = 45;
const { width } = Dimensions.get('window');
type Mode = 'intro' | 'quiz' | 'result' | 'review';

export default function SimuladoScreen({ navigation }: Props) {
  const [mode, setMode]         = useState<Mode>('intro');
  const [questions, setQuestions] = useState<SimuladoQuestion[]>([]);
  const [index, setIndex]       = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TEMPO_POR_QUESTAO);
  const [results, setResults]   = useState<QuestionResult[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerAnim = useRef(new Animated.Value(1)).current;

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    setTimeLeft(TEMPO_POR_QUESTAO);
    timerAnim.setValue(1);
    Animated.timing(timerAnim, {
      toValue: 0,
      duration: TEMPO_POR_QUESTAO * 1000,
      useNativeDriver: false,
    }).start();
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          stopTimer();
          setConfirmed(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }, [stopTimer, timerAnim]);

  useEffect(() => () => stopTimer(), [stopTimer]);

  useEffect(() => {
    if (mode === 'quiz' && !confirmed) startTimer();
    if (confirmed) stopTimer();
  }, [index, confirmed, mode]);

  function startSimulado() {
    const qs = shuffleQuestions();
    setQuestions(qs);
    setIndex(0);
    setSelected(null);
    setConfirmed(false);
    setResults([]);
    setMode('quiz');
  }

  function confirm() {
    if (selected === null && timeLeft > 0) return;
    stopTimer();
    setConfirmed(true);
  }

  function next() {
    const q = questions[index];
    const isCorrect = selected !== null && selected === q.correctIndex;
    const newResult: QuestionResult = {
      question: q,
      selectedIndex: selected,
      correct: isCorrect,
      timeUp: timeLeft === 0 && selected === null,
    };
    const newResults = [...results, newResult];
    if (index + 1 >= questions.length) {
      setResults(newResults);
      setMode('result');
    } else {
      setResults(newResults);
      setIndex(i => i + 1);
      setSelected(null);
      setConfirmed(false);
    }
  }

  // ─── INTRO ───────────────────────────────────────────────────────────────
  if (mode === 'intro') {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.introContent}>
        <View style={styles.introHeader}>
          <Text style={styles.introIcon}>📝</Text>
          <Text style={styles.introTitle}>Simulado Final</Text>
          <Text style={styles.introSub}>Teste seus conhecimentos de todos os módulos</Text>
        </View>

        <View style={[styles.infoCard, SHADOW]}>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>❓</Text>
            <View>
              <Text style={styles.infoLabel}>Questões</Text>
              <Text style={styles.infoVal}>20 questões</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>⏱️</Text>
            <View>
              <Text style={styles.infoLabel}>Tempo por questão</Text>
              <Text style={styles.infoVal}>45 segundos</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoIcon}>🔀</Text>
            <View>
              <Text style={styles.infoLabel}>Ordem</Text>
              <Text style={styles.infoVal}>Aleatória a cada tentativa</Text>
            </View>
          </View>
          <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.infoIcon}>🏆</Text>
            <View>
              <Text style={styles.infoLabel}>Aprovação</Text>
              <Text style={styles.infoVal}>70% de acerto</Text>
            </View>
          </View>
        </View>

        <Text style={styles.modulesTitle}>Conteúdo cobrado:</Text>
        {MODULES.map(m => (
          <View key={m.id} style={[styles.moduleChip, { borderLeftColor: m.color }]}>
            <Text style={styles.moduleChipIcon}>{m.icon}</Text>
            <View>
              <Text style={styles.moduleChipTitle}>{m.title}</Text>
              <Text style={styles.moduleChipSub}>{m.exercises.length} questões</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={[styles.startBtn, { backgroundColor: COLORS.primary }]}
          onPress={startSimulado}
          activeOpacity={0.85}
        >
          <Text style={styles.startBtnText}>Iniciar Simulado</Text>
        </TouchableOpacity>
        <View style={{ height: 32 }} />
      </ScrollView>
    );
  }

  // ─── QUIZ ────────────────────────────────────────────────────────────────
  if (mode === 'quiz') {
    const q = questions[index];
    const timerColor = timeLeft <= 10 ? COLORS.error : timeLeft <= 20 ? COLORS.warning : COLORS.primary;
    const timerWidth = timerAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });

    return (
      <View style={styles.container}>
        <View style={[styles.quizHeader, { backgroundColor: q.moduleColor }]}>
          <View style={styles.quizHeaderTop}>
            <Text style={styles.quizModLabel}>{q.moduleName.split(' ').slice(0, 2).join(' ')}</Text>
            <Text style={[styles.quizTimer, { color: COLORS.white }]}>{timeLeft}s</Text>
          </View>
          <View style={styles.quizProgress}>
            <Text style={styles.quizProgressText}>{index + 1} / {questions.length}</Text>
            <View style={styles.quizTrack}>
              <View style={[styles.quizFill, { width: `${((index + 1) / questions.length) * 100}%` }]} />
            </View>
          </View>
          <View style={styles.timerTrack}>
            <Animated.View style={[styles.timerFill, { width: timerWidth, backgroundColor: timerColor }]} />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.quizScroll}>
          <View style={[styles.questionCard, SHADOW]}>
            <Text style={styles.questionText}>{q.question}</Text>
          </View>

          {q.options.map((opt, i) => {
            let bg = COLORS.card;
            let border = COLORS.border;
            if (confirmed) {
              if (i === q.correctIndex)   { bg = '#E8F5E9'; border = COLORS.success; }
              else if (i === selected)    { bg = '#FFEBEE'; border = COLORS.error; }
            } else if (i === selected)    { border = q.moduleColor; bg = q.moduleColor + '18'; }

            return (
              <TouchableOpacity
                key={i}
                style={[styles.option, { backgroundColor: bg, borderColor: border }]}
                onPress={() => !confirmed && setSelected(i)}
                activeOpacity={confirmed ? 1 : 0.85}
              >
                <View style={[styles.optLetter, { backgroundColor: border }]}>
                  <Text style={styles.optLetterText}>{['A','B','C','D'][i]}</Text>
                </View>
                <Text style={styles.optText}>{opt}</Text>
                {confirmed && i === q.correctIndex && <Text style={styles.checkMark}>✓</Text>}
                {confirmed && i === selected && i !== q.correctIndex && <Text style={styles.crossMark}>✗</Text>}
              </TouchableOpacity>
            );
          })}

          {confirmed && (
            <View style={[styles.explanationCard, SHADOW]}>
              <Text style={styles.explTitle}>💡 Explicação</Text>
              <Text style={styles.explText}>{q.explanation}</Text>
            </View>
          )}

          {(confirmed || timeLeft === 0) ? (
            <TouchableOpacity
              style={[styles.actionBtn, { backgroundColor: q.moduleColor }]}
              onPress={next}
            >
              <Text style={styles.actionBtnText}>
                {index + 1 >= questions.length ? 'Ver Resultado' : 'Próxima →'}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.actionBtn, { backgroundColor: selected !== null ? q.moduleColor : COLORS.border }]}
              onPress={confirm}
              disabled={selected === null}
            >
              <Text style={styles.actionBtnText}>Confirmar</Text>
            </TouchableOpacity>
          )}

          <View style={{ height: 32 }} />
        </ScrollView>
      </View>
    );
  }

  // ─── RESULT ──────────────────────────────────────────────────────────────
  if (mode === 'result') {
    const total   = results.length;
    const correct = results.filter(r => r.correct).length;
    const pct     = Math.round((correct / total) * 100);
    const approved = pct >= 70;

    const byModule = MODULES.map(m => {
      const modResults = results.filter(r => r.question.moduleId === m.id);
      const modCorrect = modResults.filter(r => r.correct).length;
      return { module: m, correct: modCorrect, total: modResults.length };
    });

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.resultContent}>
        <View style={[styles.resultCard, SHADOW]}>
          <Text style={styles.resultEmoji}>{approved ? '🎉' : '📚'}</Text>
          <Text style={styles.resultTitle}>{approved ? 'Aprovado!' : 'Continue Estudando'}</Text>
          <Text style={[styles.resultPct, { color: approved ? COLORS.success : COLORS.warning }]}>{pct}%</Text>
          <View style={styles.resultStats}>
            <View style={styles.resultStat}>
              <Text style={[styles.resultStatNum, { color: COLORS.success }]}>{correct}</Text>
              <Text style={styles.resultStatLabel}>Certas</Text>
            </View>
            <View style={[styles.resultStatDivider]} />
            <View style={styles.resultStat}>
              <Text style={[styles.resultStatNum, { color: COLORS.error }]}>{total - correct}</Text>
              <Text style={styles.resultStatLabel}>Erradas</Text>
            </View>
            <View style={[styles.resultStatDivider]} />
            <View style={styles.resultStat}>
              <Text style={[styles.resultStatNum, { color: COLORS.textSecondary }]}>{total}</Text>
              <Text style={styles.resultStatLabel}>Total</Text>
            </View>
          </View>
        </View>

        <Text style={styles.byModuleTitle}>Desempenho por módulo:</Text>
        {byModule.map(({ module: m, correct: c, total: t }) => {
          const modPct = t > 0 ? Math.round((c / t) * 100) : 0;
          return (
            <View key={m.id} style={[styles.modResultCard, SHADOW]}>
              <View style={styles.modResultHeader}>
                <Text style={styles.modResultIcon}>{m.icon}</Text>
                <Text style={styles.modResultTitle} numberOfLines={1}>{m.title}</Text>
                <Text style={[styles.modResultPct, { color: modPct >= 70 ? COLORS.success : COLORS.warning }]}>
                  {modPct}%
                </Text>
              </View>
              <View style={styles.modResultTrack}>
                <View style={[styles.modResultFill, {
                  width: `${modPct}%`,
                  backgroundColor: modPct >= 70 ? COLORS.success : COLORS.warning,
                }]} />
              </View>
              <Text style={styles.modResultSub}>{c}/{t} questões corretas</Text>
            </View>
          );
        })}

        <View style={styles.resultBtns}>
          <TouchableOpacity
            style={[styles.resultBtn, { backgroundColor: COLORS.primary }]}
            onPress={() => setMode('review')}
          >
            <Text style={styles.resultBtnText}>Revisar Erros</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.resultBtn, { backgroundColor: COLORS.border }]}
            onPress={startSimulado}
          >
            <Text style={[styles.resultBtnText, { color: COLORS.textSecondary }]}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.homeLink} onPress={() => navigation.goBack()}>
          <Text style={styles.homeLinkText}>← Voltar ao início</Text>
        </TouchableOpacity>
        <View style={{ height: 32 }} />
      </ScrollView>
    );
  }

  // ─── REVIEW ──────────────────────────────────────────────────────────────
  const wrong = results.filter(r => !r.correct);
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.reviewTitle}>
        {wrong.length === 0 ? '🏆 Você acertou tudo!' : `Questões para revisar (${wrong.length})`}
      </Text>
      {wrong.map((r, i) => (
        <View key={r.question.id} style={[styles.reviewCard, SHADOW, { borderLeftColor: r.question.moduleColor }]}>
          <Text style={styles.reviewNum}>Questão {i + 1}</Text>
          <Text style={styles.reviewQuestion}>{r.question.question}</Text>
          {r.timeUp && <Text style={styles.reviewTimeUp}>⏱ Tempo esgotado</Text>}
          {r.selectedIndex !== null && (
            <View style={styles.reviewRow}>
              <Text style={[styles.reviewTag, { backgroundColor: '#FFEBEE', color: COLORS.error }]}>
                Sua resposta: {['A','B','C','D'][r.selectedIndex]}
              </Text>
            </View>
          )}
          <View style={styles.reviewRow}>
            <Text style={[styles.reviewTag, { backgroundColor: '#E8F5E9', color: COLORS.success }]}>
              Correta: {['A','B','C','D'][r.question.correctIndex]}. {r.question.options[r.question.correctIndex]}
            </Text>
          </View>
          <Text style={styles.reviewExpl}>{r.question.explanation}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={[styles.actionBtn, { backgroundColor: COLORS.primary, marginTop: 8 }]}
        onPress={() => setMode('result')}
      >
        <Text style={styles.actionBtnText}>← Voltar ao Resultado</Text>
      </TouchableOpacity>
      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:        { flex: 1, backgroundColor: COLORS.background },
  introContent:     { padding: 16 },
  introHeader:      { alignItems: 'center', paddingVertical: 24 },
  introIcon:        { fontSize: 56, marginBottom: 8 },
  introTitle:       { fontSize: 24, fontWeight: '700', color: COLORS.text },
  introSub:         { fontSize: 14, color: COLORS.textMuted, marginTop: 4, textAlign: 'center' },
  infoCard:         { backgroundColor: COLORS.card, borderRadius: RADIUS.lg, padding: 16, marginBottom: 20 },
  infoRow:          { flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  infoIcon:         { fontSize: 22 },
  infoLabel:        { fontSize: 11, color: COLORS.textMuted, fontWeight: '600' },
  infoVal:          { fontSize: 14, color: COLORS.text, fontWeight: '700', marginTop: 1 },
  modulesTitle:     { fontSize: 14, fontWeight: '700', color: COLORS.text, marginBottom: 10 },
  moduleChip:       { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: COLORS.card, borderRadius: RADIUS.md, padding: 12, marginBottom: 8, borderLeftWidth: 4, ...SHADOW },
  moduleChipIcon:   { fontSize: 20 },
  moduleChipTitle:  { fontSize: 13, fontWeight: '700', color: COLORS.text },
  moduleChipSub:    { fontSize: 11, color: COLORS.textMuted, marginTop: 1 },
  startBtn:         { borderRadius: RADIUS.lg, padding: 17, alignItems: 'center', marginTop: 20 },
  startBtnText:     { color: COLORS.white, fontSize: 17, fontWeight: '700' },
  quizHeader:       { padding: 14, paddingBottom: 12 },
  quizHeaderTop:    { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  quizModLabel:     { fontSize: 11, fontWeight: '600', color: 'rgba(255,255,255,0.8)' },
  quizTimer:        { fontSize: 13, fontWeight: '700' },
  quizProgress:     { marginBottom: 6 },
  quizProgressText: { fontSize: 11, color: 'rgba(255,255,255,0.7)', textAlign: 'right', marginBottom: 4 },
  quizTrack:        { height: 3, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 2, overflow: 'hidden' },
  quizFill:         { height: '100%', backgroundColor: COLORS.white, borderRadius: 2 },
  timerTrack:       { height: 4, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 2, overflow: 'hidden', marginTop: 8 },
  timerFill:        { height: '100%', borderRadius: 2 },
  quizScroll:       { padding: 16 },
  questionCard:     { backgroundColor: COLORS.card, borderRadius: RADIUS.lg, padding: 18, marginBottom: 14 },
  questionText:     { fontSize: 15, color: COLORS.text, lineHeight: 22, fontWeight: '600' },
  option:           { flexDirection: 'row', alignItems: 'center', borderRadius: RADIUS.md, padding: 13, marginBottom: 9, borderWidth: 1.5, gap: 10 },
  optLetter:        { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  optLetterText:    { color: COLORS.white, fontWeight: '700', fontSize: 12 },
  optText:          { flex: 1, fontSize: 13, color: COLORS.text, lineHeight: 19 },
  checkMark:        { color: COLORS.success, fontWeight: '700', fontSize: 16 },
  crossMark:        { color: COLORS.error, fontWeight: '700', fontSize: 16 },
  explanationCard:  { backgroundColor: '#FFF9C4', borderRadius: RADIUS.md, padding: 14, marginBottom: 14 },
  explTitle:        { fontWeight: '700', fontSize: 13, color: COLORS.text, marginBottom: 5 },
  explText:         { fontSize: 12, color: COLORS.textSecondary, lineHeight: 18 },
  actionBtn:        { borderRadius: RADIUS.lg, padding: 15, alignItems: 'center' },
  actionBtnText:    { color: COLORS.white, fontSize: 15, fontWeight: '700' },
  resultContent:    { padding: 16 },
  resultCard:       { backgroundColor: COLORS.card, borderRadius: RADIUS.xl, padding: 28, alignItems: 'center', marginBottom: 20 },
  resultEmoji:      { fontSize: 48, marginBottom: 6 },
  resultTitle:      { fontSize: 18, fontWeight: '700', color: COLORS.text, marginBottom: 4 },
  resultPct:        { fontSize: 60, fontWeight: '700', marginVertical: 8 },
  resultStats:      { flexDirection: 'row', alignItems: 'center', gap: 16 },
  resultStat:       { alignItems: 'center' },
  resultStatNum:    { fontSize: 28, fontWeight: '700' },
  resultStatLabel:  { fontSize: 11, color: COLORS.textMuted, marginTop: 2 },
  resultStatDivider:{ width: 1, height: 36, backgroundColor: COLORS.border },
  byModuleTitle:    { fontSize: 14, fontWeight: '700', color: COLORS.text, marginBottom: 10 },
  modResultCard:    { backgroundColor: COLORS.card, borderRadius: RADIUS.md, padding: 14, marginBottom: 10 },
  modResultHeader:  { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  modResultIcon:    { fontSize: 18 },
  modResultTitle:   { flex: 1, fontSize: 13, fontWeight: '600', color: COLORS.text },
  modResultPct:     { fontSize: 15, fontWeight: '700' },
  modResultTrack:   { height: 5, backgroundColor: COLORS.border, borderRadius: 3, overflow: 'hidden', marginBottom: 5 },
  modResultFill:    { height: '100%', borderRadius: 3 },
  modResultSub:     { fontSize: 11, color: COLORS.textMuted },
  resultBtns:       { flexDirection: 'row', gap: 10, marginTop: 8, marginBottom: 8 },
  resultBtn:        { flex: 1, borderRadius: RADIUS.lg, padding: 14, alignItems: 'center' },
  resultBtnText:    { color: COLORS.white, fontWeight: '700', fontSize: 14 },
  homeLink:         { alignItems: 'center', padding: 8 },
  homeLinkText:     { color: COLORS.textMuted, fontSize: 13 },
  reviewTitle:      { fontSize: 17, fontWeight: '700', color: COLORS.text, marginBottom: 14 },
  reviewCard:       { backgroundColor: COLORS.card, borderRadius: RADIUS.md, padding: 16, marginBottom: 12, borderLeftWidth: 4 },
  reviewNum:        { fontSize: 11, fontWeight: '700', color: COLORS.textMuted, marginBottom: 6, textTransform: 'uppercase' },
  reviewQuestion:   { fontSize: 14, fontWeight: '600', color: COLORS.text, lineHeight: 20, marginBottom: 10 },
  reviewTimeUp:     { fontSize: 12, color: COLORS.error, marginBottom: 8 },
  reviewRow:        { marginBottom: 6 },
  reviewTag:        { fontSize: 12, fontWeight: '600', borderRadius: RADIUS.sm, padding: 8, lineHeight: 18 },
  reviewExpl:       { fontSize: 12, color: COLORS.textSecondary, lineHeight: 18, marginTop: 8, fontStyle: 'italic' },
});
