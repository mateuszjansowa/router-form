import { TextField } from '@mui/material';

type InputAnswerProps = {
  answer: null | string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};
function InputAnswer({ answer, handleChange }: InputAnswerProps) {
  return <TextField variant="filled" value={answer} onChange={handleChange} />;
}

export default InputAnswer;
