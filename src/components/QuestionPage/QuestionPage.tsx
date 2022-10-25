import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router';
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import InputAnswer from '../InputAnswer/InputAnswer';
import { Question } from '../../api/types';
import { updateQuestionAnswer } from '../../api';

type QuestionPageProps = {
  questions: Question[];
};

type QuestionParams = {
  id: string;
};

function QuestionPage({ questions }: QuestionPageProps) {
  const { id }: QuestionParams = useParams();
  const [answer, setAnswer] = useState<string>('');

  const { question, answerType } = questions[+id];

  const saveAnswer = () => {
    updateQuestionAnswer({ id: +id, answer });
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const renderAnswerType = () => {
    switch (answerType) {
      case 'input':
        return <InputAnswer answer={answer} handleChange={handleAnswerChange} />;
      case 'radio':
        return <>-</>;
      // return <RadioAnswer />;
      case 'checkbox':
        return <>-</>;
      // return <CheckboxAnswer />;
      default:
        return <Typography>API error</Typography>;
    }
  };

  return (
    <Box>
      <Typography>{question}</Typography>
      {renderAnswerType()}

      <NavigationButtons questions={questions} handleClick={saveAnswer} />

      {/* <Typography variant="h2">{questions.length > 0 && questions[0].question}</Typography>
        <Button variant="outlined" type="button" onClick={() => updateQuestionAnswer({ id: 0, answer: 'no tak!' })}>
          Update
        </Button> */}
    </Box>
  );
}

export default QuestionPage;
