import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

import "./datepicker.container.component.scss";
import DatepickerComponent from "./datepicker-component/datepicker.component";

const DatepickerContainer = () => {
  return (
    <Accordion style={{backgroundColor: "transparent", marginTop: "1vh"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Оберіть часовий діапазон пошуку</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="datepicker_input_block">
          <DatepickerComponent />
          <Box sx={{ mx: 2 }}></Box>
          <DatepickerComponent />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default DatepickerContainer
