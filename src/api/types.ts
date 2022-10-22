export type Question = {
  id: number;
  question: string;
};

export type UpdateQuestionAnswerType = {
  id: number;
  answer: string;
};

export type UpdateQuestionAnswerResponse = Question & { updatedAt: string };
