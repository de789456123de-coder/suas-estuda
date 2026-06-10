import { ModuleId } from '../types';
import { MODULES } from './modules';

export interface SimuladoQuestion {
  id: string;
  moduleId: ModuleId;
  moduleName: string;
  moduleColor: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuestionResult {
  question: SimuladoQuestion;
  selectedIndex: number | null;
  correct: boolean;
  timeUp: boolean;
}

function buildQuestions(): SimuladoQuestion[] {
  const questions: SimuladoQuestion[] = [];
  for (const mod of MODULES) {
    for (const ex of mod.exercises) {
      questions.push({
        id: ex.id,
        moduleId: mod.id,
        moduleName: mod.title,
        moduleColor: mod.color,
        question: ex.question,
        options: ex.options,
        correctIndex: ex.correctIndex,
        explanation: ex.explanation,
      });
    }
  }
  return questions;
}

export const SIMULADO_QUESTIONS: SimuladoQuestion[] = buildQuestions();

export function shuffleQuestions(): SimuladoQuestion[] {
  const arr = [...SIMULADO_QUESTIONS];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
