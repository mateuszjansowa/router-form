import { useEffect, useState } from 'react';
import { Typography, Button, Snackbar, Alert } from '@mui/material';
import { getQuestions, updateQuestionAnswer } from './api';
import { Question } from './api/types';
import './App.css';

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  async function fetchQuestions() {
    const question = await getQuestions();
    return setQuestions(question);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div className="App">
      <Typography variant="h2">{questions.length > 0 && questions[0].question}</Typography>
      <Button variant="outlined" type="button" onClick={() => updateQuestionAnswer({ id: 0, answer: 'no tak!' })}>
        Update
      </Button>
      {/* TODO
      https://github.com/iamhosseindhv/notistack */}
      <Snackbar open autoHideDuration={2000}>
        <Alert severity="success">Data downloaded!</Alert>
      </Snackbar>
    </div>
  );
}

export default App;
