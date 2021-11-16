import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectEquipment = () => {
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectEquipment;
