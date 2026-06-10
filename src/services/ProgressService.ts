import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModuleProgress, ModuleId } from '../types';

const KEY = (id: ModuleId) => `@suas_estuda_progress_${id}`;
const SIMULADO_KEY = '@suas_estuda_simulado';

const DEFAULT: ModuleProgress = {
  lessonsCompleted: [],
  exercisesCompleted: false,
  flashcardsCompleted: false,
  score: 0,
};

export async function getProgress(moduleId: ModuleId): Promise<ModuleProgress> {
  try {
    const raw = await AsyncStorage.getItem(KEY(moduleId));
    return raw ? JSON.parse(raw) : { ...DEFAULT };
  } catch {
    return { ...DEFAULT };
  }
}

export async function markLessonCompleted(moduleId: ModuleId, lessonIndex: number): Promise<void> {
  const p = await getProgress(moduleId);
  if (!p.lessonsCompleted.includes(lessonIndex)) {
    p.lessonsCompleted.push(lessonIndex);
    await AsyncStorage.setItem(KEY(moduleId), JSON.stringify(p));
  }
}

export async function markExercisesCompleted(moduleId: ModuleId, score: number): Promise<void> {
  const p = await getProgress(moduleId);
  p.exercisesCompleted = true;
  p.score = score;
  await AsyncStorage.setItem(KEY(moduleId), JSON.stringify(p));
}

export async function markFlashcardsCompleted(moduleId: ModuleId): Promise<void> {
  const p = await getProgress(moduleId);
  p.flashcardsCompleted = true;
  await AsyncStorage.setItem(KEY(moduleId), JSON.stringify(p));
}

export async function saveSimuladoScore(score: number, total: number): Promise<void> {
  await AsyncStorage.setItem(SIMULADO_KEY, JSON.stringify({ score, total, date: new Date().toISOString() }));
}

export async function getSimuladoScore(): Promise<{ score: number; total: number; date: string } | null> {
  try {
    const raw = await AsyncStorage.getItem(SIMULADO_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function resetAll(): Promise<void> {
  const keys = ['modulo1','modulo2','modulo3','modulo4'].map(id => KEY(id as ModuleId));
  await AsyncStorage.multiRemove([...keys, SIMULADO_KEY]);
}
