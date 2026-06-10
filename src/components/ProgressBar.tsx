import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, RADIUS } from '../theme';

interface Props {
  progress: number;
  color?: string;
  showLabel?: boolean;
}

export default function ProgressBar({ progress, color = COLORS.primary, showLabel = true }: Props) {
  const pct = Math.min(100, Math.max(0, Math.round(progress * 100)));
  return (
    <View style={styles.wrap}>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${pct}%`, backgroundColor: color }]} />
      </View>
      {showLabel && <Text style={[styles.label, { color }]}>{pct}%</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap:  { flexDirection: 'row', alignItems: 'center', gap: 8 },
  track: { flex: 1, height: 6, backgroundColor: COLORS.border, borderRadius: RADIUS.sm, overflow: 'hidden' },
  fill:  { height: '100%', borderRadius: RADIUS.sm },
  label: { fontSize: 12, fontWeight: '600', minWidth: 32, textAlign: 'right' },
});
