import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box>
      <Typography>Hello 👋</Typography>
      <Link to="/question/0">Start!</Link>
    </Box>
  );
}

export default Home;
