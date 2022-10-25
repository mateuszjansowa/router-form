import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Question } from '../../api/types';
import { getQuestionNumber } from '../../utils';

type NavigationButtonsProps = {
  questions: Question[];
  handleClick: () => void;
};

function NavigationButtons({ questions, handleClick }: NavigationButtonsProps) {
  const { pathname } = useLocation();
  const generateLinks = () => {
    const prevQuestion = questions[getQuestionNumber(pathname) - 1];
    const nextQuestion = questions[getQuestionNumber(pathname) + 1];

    return (
      <>
        {prevQuestion && (
          <Grid item>
            <Link to={`/question/${prevQuestion.id}`} onClick={handleClick}>
              Poprzednie pytanie
            </Link>
          </Grid>
        )}
        {nextQuestion && (
          <Grid item>
            <Link to={`/question/${nextQuestion.id}`} onClick={handleClick}>
              Kolejne pytanie
            </Link>
          </Grid>
        )}
      </>
    );
  };
  return (
    <Grid container spacing="20px">
      {generateLinks()}
    </Grid>
  );
}

export default NavigationButtons;
