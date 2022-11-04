import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingSpinner = (props) => {
  
  let errors;
  
  if (props.errors && props.errors.length) {
    errors = <div> {props.errors[0]} </div>;
    setTimeout(() => props.history.push('/'), 2000);

    if (props.clearErrors) {
      setTimeout(() => props.clearErrors(), 4000);
    }
  }

  return (
    <Box className='spinner-div'>
      <CircularProgress color="success" size='80' />
      <br />
      <div className='loading-error'>{errors}</div>
    </Box>
  )
}

export default LoadingSpinner;