import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectEquipment = ({appReducer}) => {
  console.log(appReducer);
  const [equipment, setEquipment] = React.useState('');

  const handleChange = (event) => {
    setEquipment(event.target.value);
  };

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
        >
        <MenuItem value="1">1</MenuItem>
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
