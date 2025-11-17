// Column definition
export interface ExamColumn {
  tag: string;
  label: string;
}

// Exam row definition (keys must match column tags)
export type ExamRow = {
  [columnTag: string]: string | number | null;
};

// Category definition
export interface ExamCategory {
  tag: string;
  label: string;
  description?: string;
  columns: ExamColumn[];
  exams: ExamRow[];
}
