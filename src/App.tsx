import { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { QuestionPage, Home } from './components';
import AnimatedPage from './components/AnimatedPage/AnimatedPage';
import { getQuestions } from './api';
import { Question } from './api/types';
import './App.css';

function App() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const location = useLocation();

  async function fetchQuestions() {
    const question = await getQuestions();
    return setQuestions(question);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  const renderQuestionsRoutes = () => {
    return (
      questions &&
      questions.map((question) => (
        <Route key={question.id} path="/question/:id">
          <AnimatedPage>
            <QuestionPage questions={questions} />
          </AnimatedPage>
        </Route>
      ))
    );
  };

  return (
    <Box className="App">
      {questions ? (
        <AnimatePresence mode="wait">
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home />
            </Route>
            {renderQuestionsRoutes()}
          </Switch>
        </AnimatePresence>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}

export default App;
