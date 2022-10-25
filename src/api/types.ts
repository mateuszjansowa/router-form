export type Question = {
  id: number;
  question: string;
  answerType: 'input' | 'radio' | 'checkbox';
};

export type UpdateQuestionAnswerType = {
  id: number;
  answer: string;
};

export type UpdateQuestionAnswerResponse = Question & { updatedAt: string };
