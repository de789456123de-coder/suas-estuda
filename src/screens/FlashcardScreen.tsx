import React, { useState, useRef, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions,
} from 'react-native';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ModuleId, Flashcard } from '../types';
import { MODULES } from '../data/modules';
import { FLASHCARDS_DATA, ALL_FLASHCARDS } from '../data/flashcards';
import { markFlashcardsCompleted } from '../services/ProgressService';
import { COLORS, SHADOW, RADIUS } from '../theme';

type Nav   = StackNavigationProp<RootStackParamList, 'Flashcards'>;
type Route = RouteProp<RootStackParamList, 'Flashcards'>;
interface Props { navigation: Nav; route: Route }

const { width } = Dimensions.get('window');

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardScreen({ navigation, route }: Props) {
  const moduleId = route.params?.moduleId;
  type Mode = 'select' | 'play' | 'result';
  const [mode, setMode]     = useState<Mode>(moduleId ? 'play' : 'select');
  const [cards, setCards]   = useState<Flashcard[]>([]);
  const [index, setIndex]   = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState({ seiMuito: 0, revisar: 0, naoSei: 0 });
  const flipAnim = useRef(new Animated.Value(0)).current;
  const [activeId, setActiveId] = useState<ModuleId | 'all' | undefined>(moduleId);

  function startDeck(id: ModuleId | 'all') {
    const raw = id === 'all' ? ALL_FLASHCARDS : (FLASHCARDS_DATA[id] ?? []);
    if (raw.length === 0) return;
    setActiveId(id);
    setCards(shuffle(raw));
    setIndex(0);
    setFlipped(false);
    flipAnim.setValue(0);
    setResults({ seiMuito: 0, revisar: 0, naoSei: 0 });
    setMode('play');
  }

  useFocusEffect(useCallback(() => {
    if (moduleId) startDeck(moduleId);
  }, [moduleId]));

  function flip() {
    Animated.spring(flipAnim, {
      toValue: flipped ? 0 : 1,
      friction: 8,
      useNativeDriver: true,
    }).start();
    setFlipped(f => !f);
  }

  async function rate(verdict: 'seiMuito' | 'revisar' | 'naoSei') {
    setResults(r => ({ ...r, [verdict]: r[verdict] + 1 }));
    if (index + 1 >= cards.length) {
      if (activeId && activeId !== 'all') await markFlashcardsCompleted(activeId as ModuleId);
      setMode('result');
    } else {
      flipAnim.setValue(0);
      setFlipped(false);
      setIndex(i => i + 1);
    }
  }

  const frontInterp = flipAnim.interpolate({ inputRange: [0,1], outputRange: ['0deg','180deg'] });
  const backInterp  = flipAnim.interpolate({ inputRange: [0,1], outputRange: ['180deg','360deg'] });

  if (mode === 'select') {
    return (
      <View style={styles.container}>
        <Text style={styles.selectTitle}>Escolha um baralho</Text>
        {MODULES.map(m => {
          const count = (FLASHCARDS_DATA[m.id] ?? []).length;
          return (
            <TouchableOpacity
              key={m.id}
              style={[styles.deckBtn, SHADOW, { borderLeftColor: m.color }]}
              onPress={() => startDeck(m.id as ModuleId)}
              activeOpacity={0.85}
            >
              <Text style={styles.deckIcon}>{m.icon}</Text>
              <View style={styles.deckInfo}>
                <Text style={styles.deckTitle}>{m.title}</Text>
                <Text style={styles.deckCount}>{count} cards</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          style={[styles.deckBtn, SHADOW, { borderLeftColor: COLORS.accent }]}
          onPress={() => startDeck('all')}
          activeOpacity={0.85}
        >
          <Text style={styles.deckIcon}>🃏</Text>
          <View style={styles.deckInfo}>
            <Text style={styles.deckTitle}>Todos os módulos</Text>
            <Text style={styles.deckCount}>{ALL_FLASHCARDS.length} cards</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (mode === 'result') {
    const total = results.seiMuito + results.revisar + results.naoSei;
    const pct   = total > 0 ? Math.round((results.seiMuito / total) * 100) : 0;
    return (
      <View style={[styles.container, styles.center]}>
        <View style={[styles.resultCard, SHADOW]}>
          <Text style={styles.resultEmoji}>{pct >= 70 ? '🎉' : '📚'}</Text>
          <Text style={styles.resultTitle}>Sessão Concluída</Text>
          <Text style={[styles.resultPct, { color: COLORS.primary }]}>{pct}%</Text>
          <View style={styles.resultGrid}>
            <View style={styles.resultItem}>
              <Text style={[styles.resultNum, { color: COLORS.success }]}>{results.seiMuito}</Text>
              <Text style={styles.resultLabel}>Sei bem</Text>
            </View>
            <View style={styles.resultItem}>
              <Text style={[styles.resultNum, { color: COLORS.warning }]}>{results.revisar}</Text>
              <Text style={styles.resultLabel}>Revisar</Text>
            </View>
            <View style={styles.resultItem}>
              <Text style={[styles.resultNum, { color: COLORS.error }]}>{results.naoSei}</Text>
              <Text style={styles.resultLabel}>Não sei</Text>
            </View>
          </View>
          <View style={styles.resultBtns}>
            <TouchableOpacity style={[styles.resultBtn, { backgroundColor: COLORS.primary }]}
              onPress={() => startDeck(activeId ?? 'all')}>
              <Text style={styles.resultBtnText}>Repetir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.resultBtn, { backgroundColor: COLORS.border }]}
              onPress={() => navigation.goBack()}>
              <Text style={[styles.resultBtnText, { color: COLORS.textSecondary }]}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const card = cards[index];
  return (
    <View style={styles.container}>
      <View style={styles.playHeader}>
        <Text style={styles.playCount}>{index + 1} / {cards.length}</Text>
        <View style={styles.playTrack}>
          <View style={[styles.playFill, { width: `${((index + 1) / cards.length) * 100}%` }]} />
        </View>
        <Text style={styles.playHint}>{flipped ? 'Verso' : 'Toque para virar'}</Text>
      </View>

      <TouchableOpacity onPress={flip} activeOpacity={0.95} style={styles.cardWrap}>
        <Animated.View style={[styles.cardFace, styles.cardFront, { transform: [{ rotateY: frontInterp }] }]}>
          <Text style={styles.cardFaceLabel}>FRENTE</Text>
          <Text style={styles.cardFrontText}>{card.front}</Text>
        </Animated.View>
        <Animated.View style={[styles.cardFace, styles.cardBack, { transform: [{ rotateY: backInterp }] }]}>
          <Text style={[styles.cardFaceLabel, { color: COLORS.primaryLight }]}>VERSO</Text>
          <Text style={styles.cardBackText}>{card.back}</Text>
        </Animated.View>
      </TouchableOpacity>

      {flipped && (
        <View style={styles.ratingRow}>
          <TouchableOpacity style={[styles.rateBtn, { backgroundColor: COLORS.error }]} onPress={() => rate('naoSei')}>
            <Text style={styles.rateBtnText}>✗{'\n'}Não sei</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.rateBtn, { backgroundColor: COLORS.warning }]} onPress={() => rate('revisar')}>
            <Text style={styles.rateBtnText}>↻{'\n'}Revisar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.rateBtn, { backgroundColor: COLORS.success }]} onPress={() => rate('seiMuito')}>
            <Text style={styles.rateBtnText}>✓{'\n'}Sei bem</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:     { flex: 1, backgroundColor: COLORS.background, padding: 16 },
  center:        { alignItems: 'center', justifyContent: 'center' },
  selectTitle:   { fontSize: 18, fontWeight: '700', color: COLORS.text, marginBottom: 16 },
  deckBtn:       { backgroundColor: COLORS.card, borderRadius: RADIUS.md, padding: 16, marginBottom: 12, flexDirection: 'row', alignItems: 'center', borderLeftWidth: 5, ...SHADOW, gap: 12 },
  deckIcon:      { fontSize: 24 },
  deckInfo:      { flex: 1 },
  deckTitle:     { fontWeight: '700', fontSize: 14, color: COLORS.text },
  deckCount:     { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  chevron:       { fontSize: 22, color: COLORS.textMuted },
  playHeader:    { marginBottom: 16 },
  playCount:     { fontSize: 13, fontWeight: '600', color: COLORS.textSecondary, marginBottom: 6, textAlign: 'right' },
  playTrack:     { height: 4, backgroundColor: COLORS.border, borderRadius: 2, overflow: 'hidden', marginBottom: 6 },
  playFill:      { height: '100%', backgroundColor: COLORS.primary, borderRadius: 2 },
  playHint:      { fontSize: 11, color: COLORS.textMuted, textAlign: 'center' },
  cardWrap:      { flex: 1, marginBottom: 16 },
  cardFace:      { position: 'absolute', width: '100%', height: '100%', borderRadius: RADIUS.xl, padding: 24, alignItems: 'center', justifyContent: 'center', backfaceVisibility: 'hidden', ...SHADOW },
  cardFront:     { backgroundColor: COLORS.card },
  cardBack:      { backgroundColor: COLORS.primary },
  cardFaceLabel: { position: 'absolute', top: 16, fontSize: 10, fontWeight: '700', color: COLORS.textMuted, letterSpacing: 1 },
  cardFrontText: { fontSize: 18, fontWeight: '700', color: COLORS.text, textAlign: 'center', lineHeight: 26 },
  cardBackText:  { fontSize: 15, color: COLORS.white, textAlign: 'center', lineHeight: 22 },
  ratingRow:     { flexDirection: 'row', gap: 10, marginBottom: 8 },
  rateBtn:       { flex: 1, borderRadius: RADIUS.md, padding: 14, alignItems: 'center' },
  rateBtnText:   { color: COLORS.white, fontWeight: '700', fontSize: 13, textAlign: 'center', lineHeight: 18 },
  resultCard:    { backgroundColor: COLORS.card, borderRadius: RADIUS.xl, padding: 28, alignItems: 'center', width: width - 48 },
  resultEmoji:   { fontSize: 44, marginBottom: 8 },
  resultTitle:   { fontSize: 18, fontWeight: '700', color: COLORS.text },
  resultPct:     { fontSize: 52, fontWeight: '700', marginVertical: 8 },
  resultGrid:    { flexDirection: 'row', gap: 20, marginBottom: 24 },
  resultItem:    { alignItems: 'center' },
  resultNum:     { fontSize: 28, fontWeight: '700' },
  resultLabel:   { fontSize: 12, color: COLORS.textMuted },
  resultBtns:    { flexDirection: 'row', gap: 12, width: '100%' },
  resultBtn:     { flex: 1, borderRadius: RADIUS.md, padding: 14, alignItems: 'center' },
  resultBtnText: { color: COLORS.white, fontWeight: '700', fontSize: 14 },
});
