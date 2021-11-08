import * as React from 'react';
import ukLocale from 'date-fns/locale/uk';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const DatepickerComponent = () => {
  const [value, setValue] = React.useState([null, null]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ukLocale}>
      <DatePicker
          mask="__.__.____"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} inputProps={{...params.inputProps, placeholder: "дд.мм.рррр"}} />}
        />
    </LocalizationProvider>
  );
}

export default DatepickerComponent
