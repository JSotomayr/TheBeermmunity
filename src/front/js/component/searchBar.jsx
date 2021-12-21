import * as React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const options = ['Cervezas', 'Cervecerías', 'Favoritos'];

export default function SearchBar() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
          <Paper
              className="paper"
              sx={{ p: '0.2rem 0.9rem', display: 'flex', alignItems: 'center', width: 350, borderRadius: '3rem'}}
              
          > 
            <Autocomplete         
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              disableCloseOnSelect
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}
            />
         <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
         </IconButton>
      </Paper>
    </div>
  );
}