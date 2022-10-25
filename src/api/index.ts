import axios from 'axios';
import { axiosConfig, API_URL } from './constants';
import { Question, UpdateQuestionAnswerType, UpdateQuestionAnswerResponse } from './types';
import { sleep } from '../utils';

async function getQuestions() {
  try {
    // eslint-disable-next-line no-promise-executor-return
    await sleep(1000);
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
