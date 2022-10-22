import { useEffect, useState } from 'react';
import { getQuestions, Question } from './api';
import './App.css';

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  async function fetchQuestions() {
    const question = await getQuestions();
    return setQuestions(question);
  }

  // https://bobbyhadz.com/blog/typescript-http-request-axios
  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return <div className="App">Hello!</div>;
}

export default App;
