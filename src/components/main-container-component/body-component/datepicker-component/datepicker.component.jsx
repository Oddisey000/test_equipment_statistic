import React, { useState } from 'react';
import { connect } from "react-redux";
import ukLocale from 'date-fns/locale/uk';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import "./datepicker.component.scss";

import { getEquipmentList } from "../../../../redux/app-reducer/app-reducer.actions";

const DatepickerComponent = ({data, getEquipmentList, appReducer}) => {
  const DisableOrderInput = (newValue) => {
    const elementToChange = document.getElementById("combo-box-demo").parentElement.parentElement.parentElement;
    const datePickerElOne = document.getElementById("start_date")
    const datePickerElTwo = document.getElementById("end_date")

    if (newValue) {
      elementToChange.style.display = "none"
    } else {
      if (!datePickerElOne.value && !datePickerElTwo.value) {
        elementToChange.style.display = "flex"
      }
    }
    setValue(newValue);
    setTimeout(() => {
      if (datePickerElOne.value.length === 10 && datePickerElTwo.value.length === 10) {
        CollectEquipmentInfo(datePickerElOne.value, datePickerElTwo.value)
      }
    }, 100);
  }

  const CollectEquipmentInfo = (startDate, endDate) => {
    startDate = `${startDate.substring(startDate.length - 4, startDate.length)}/${startDate.substring(3, 5)}/${startDate.substring(0, 2)}`
    endDate = `${endDate.substring(endDate.length - 4, endDate.length)}/${endDate.substring(3, 5)}/${endDate.substring(0, 2)}`
    getEquipmentList(`${appReducer.API_url}getequipment?startdate=${startDate}&enddate=${endDate}&order=`);
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
            clearable={true}
            renderInput={(params) => <TextField id={data.id} {...params} inputProps={{...params.inputProps, placeholder: "дд.мм.рррр"}} />}
          />
      </LocalizationProvider>
    </div>
  );
}

const mapStateToProps = (state, data) => {
  return {
    data: data,
    appReducer: { ...state.appReducer }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEquipmentList: (request) => dispatch(getEquipmentList(request))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DatepickerComponent)
