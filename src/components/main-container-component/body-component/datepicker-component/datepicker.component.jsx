import * as React from 'react';
import ukLocale from 'date-fns/locale/uk';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import "./datepicker.component.scss";

const DatepickerComponent = (data) => {
  const DisableOrderInput = (newValue) => {
    const elementToChange = document.getElementById("combo-box-demo").parentElement.parentElement;

    if (newValue) {
      elementToChange.style.display = "none"
    } else {
      elementToChange.style.display = "flex"
    }
    setValue(newValue);
  }

  const [value, setValue] = React.useState([null, null]);
  return (
    <div className="datepicker_input_block">
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ukLocale}>
        <DatePicker
            mask="__.__.____"
            label={data.name}
            value={value}
            onChange={DisableOrderInput}
            renderInput={(params) => <TextField id={data.id} {...params} inputProps={{...params.inputProps, placeholder: "дд.мм.рррр"}} />}
          />
      </LocalizationProvider>
    </div>
  );
}

export default DatepickerComponent
