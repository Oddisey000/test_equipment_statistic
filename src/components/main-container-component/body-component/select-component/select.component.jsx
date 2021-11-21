import React, { useState } from 'react';
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const SelectEquipment = ({appReducer}) => {
  const [equipment, setEquipment] = React.useState('');
  const forceUpdate = useForceUpdate();

  const handleChange = (event) => {
    setEquipment(event.target.value);
  };
  console.log(appReducer.testingEquipmentToSelect);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="filled" sx={{ width: 145 }}>
        <InputLabel id="demo-simple-select-label">Обладнання</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={equipment}
          label="Age"
          onChange={handleChange}
          onFocus={forceUpdate}
        >
        {appReducer.testingEquipmentToSelect.length
          ? appReducer.testingEquipmentToSelect.map((value) => (<MenuItem key={value} value={value}>{value}</MenuItem>))
          : <MenuItem value="">Дані відсутні</MenuItem>
        }
        
        </Select>
      </FormControl>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    appReducer: { ...state.appReducer }
  };
};

export default connect(mapStateToProps)(SelectEquipment);
