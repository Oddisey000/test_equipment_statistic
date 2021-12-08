import React from 'react';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';

const HelpIconButton = () => {
  return (
    <IconButton style={{position: "absolute", top: 0, right: 0}} color="inherit" aria-label="download help" component="a" href="instruction.docx">
      <HelpIcon />
    </IconButton>
  );
}

export default HelpIconButton;
