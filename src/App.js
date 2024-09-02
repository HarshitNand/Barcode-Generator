import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Barcode from 'react-barcode';

// Create a custom theme
const theme = createTheme({
  palette: {
    background: {
      default: '#f0f0f0',
    },
  },
});

function App() {
  // State to store the input and barcode value
  const [inputValue, setInputValue] = useState('');
  const [barcodeValue, setBarcodeValue] = useState('barcode-example');

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to generate barcode on button click
  const handleGenerateBarcode = () => {
    setBarcodeValue(inputValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Box component to center content */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        {/* Heading */}
        <h1 style={{ textAlign: 'center' }}>Barcode Generator</h1>
        
        {/* Input field for barcode value */}
        <TextField
          label="Enter Barcode Value"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
          margin="normal"
        />

        {/* Button to generate barcode */}
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleGenerateBarcode}
          style={{ marginTop: '16px' }}
        >
          Generate Barcode
        </Button>

        {/* Barcode display */}
        <Box mt={4}>
          <Barcode value={barcodeValue} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;


// <Box display="flex" flexDirection="column" gap={2}>

// <Box>
//   <Motion />
// </Box>


// <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
//   <Box flex={1}>
//     <Internet />
//   </Box>
//   <Box flex={1}>
//     <Latency />
//   </Box>
// </Box>


// <Box>
//   <Battery />
// </Box>
// </Box>