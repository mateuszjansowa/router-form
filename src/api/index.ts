import axios from 'axios';

const API_URL = 'http://localhost:3000/questions';

export type Question = {
  id: number;
  question: string;
};

async function getQuestions() {
  try {
    const { data } = await axios.get<Question[]>(API_URL, {
      headers: {
        Accept: 'application/json'
      }
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('error message: ', error.message);
      return [];
    }

    console.error('unexpected error: ', error);
    return [];
  }
}

export { getQuestions };
