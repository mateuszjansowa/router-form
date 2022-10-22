import axios from 'axios';
import { axiosConfig, API_URL } from './constants';
import { Question, UpdateQuestionAnswerType, UpdateQuestionAnswerResponse } from './types';

async function getQuestions() {
  try {
    const { data } = await axios.get<Question[]>(API_URL, axiosConfig);

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

async function updateQuestionAnswer({ id, answer }: UpdateQuestionAnswerType) {
  try {
    const { data } = await axios.patch<UpdateQuestionAnswerResponse>(
      `${API_URL}/${id}`,
      {
        answer
      },
      axiosConfig
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('error message: ', error.message);
      return error.message;
    }

    console.error('unexpected error: ', error);
    return 'An unexpected error occured';
  }
}

export { getQuestions, updateQuestionAnswer };
