export type ModuleId = 'modulo1' | 'modulo2' | 'modulo3' | 'modulo4';

export interface Lesson {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
}

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  moduleId: ModuleId;
}

export interface Module {
  id: ModuleId;
  number: number;
  title: string;
  subtitle: string;
  color: string;
  icon: string;
  lessons: Lesson[];
  exercises: Exercise[];
}

export interface ModuleProgress {
  lessonsCompleted: number[];
  exercisesCompleted: boolean;
  flashcardsCompleted: boolean;
  score: number;
}

export type RootStackParamList = {
  Home:         undefined;
  ModuleDetail: { moduleId: ModuleId };
  LessonDetail: { moduleId: ModuleId; lessonIndex: number };
  Exercises:    { moduleId: ModuleId };
  Flashcards:   { moduleId?: ModuleId | 'all' };
  Simulado:     undefined;
};
