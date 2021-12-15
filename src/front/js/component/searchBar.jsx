import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// EL DE GOOGLE MAPS
// export default function SearchBar() {
//   return (
//     <Paper
//         component="form" className="paper"
//         sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//     >
//         <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
//             <SearchIcon />
//         </IconButton>

//       <InputBase
//             sx={{ ml: 1, flex: 1 }}
//             placeholder="Search"
//             inputProps={{ 'aria-label': 'search google maps' }}
//       />

//       <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//       <IconButton sx={{ p: '10px' }} aria-label="menu">
//             <MenuIcon />
//       </IconButton>
//     </Paper>
//   );
// }




// MEZCLA de los dos

// import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Cervezas', 'Cervecerías', 'Favoritos'];

export default function SearchBar() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
          <Paper
              component="form" className="paper" borderRadius= "6"
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
              // color="default"
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