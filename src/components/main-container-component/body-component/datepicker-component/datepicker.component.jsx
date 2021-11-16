import * as React from 'react';
import ukLocale from 'date-fns/locale/uk';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import "./datepicker.component.scss";

const DatepickerComponent = (data) => {
  const [value, setValue] = React.useState([null, null]);
  console.log(data);
  return (
    <div className="datepicker_input_block">
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ukLocale}>
        <DatePicker
            mask="__.__.____"
            label={data.name}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField id={data.id} {...params} inputProps={{...params.inputProps, placeholder: "дд.мм.рррр"}} />}
          />
      </LocalizationProvider>
    </div>
  );
}

export default DatepickerComponent
