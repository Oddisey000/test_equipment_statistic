import React  from 'react';
import { connect } from "react-redux";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { getOrdersFromDB, getEquipmentList, resetEquipmentList } from "../../../../redux/app-reducer/app-reducer.actions";

const AutocompleteSearchBox = ({ appReducer, getOrdersFromDB, getEquipmentList, resetEquipmentList }) => {

  const DisableDateInputs = (e) => {
    const groupToChange = document.getElementsByClassName("datepicker_input_block");
    let condition;

    if (e.target.innerText) {
      getEquipmentList(`${appReducer.API_url}getequipment?order=${e.target.innerText}`);
      condition = "none";
    } else {
      resetEquipmentList()
      condition = "block";
    }

    for (var i = 0; i < groupToChange.length; i++) {
      groupToChange[i].style.display = condition;
    }

  }

  return (
    <Autocomplete
      onChange={DisableDateInputs}
      disablePortal
      id="combo-box-demo"
      options={appReducer.ordersToSelect}
      sx={{ width: 280 }}
      renderInput={(params) => <TextField id="autocomplete_input_box" {...params} label="№ ордеру" />}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    appReducer: { ...state.appReducer }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrdersFromDB: dispatch(getOrdersFromDB()),
    getEquipmentList: (request) => dispatch(getEquipmentList(request)),
    resetEquipmentList: () => dispatch(resetEquipmentList())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteSearchBox);