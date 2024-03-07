import React, { useState } from 'react';
import { Button, Container, CssBaseline, Typography, Paper, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CallIcon from '@mui/icons-material/Call';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#22C55E', 
    }
  },
});

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const generatePhoneNumber = () => {
    const min = 222222222;
    const max = 99999999;
    const randomPhoneNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setPhoneNumber('034' + randomPhoneNumber);
  };

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h3" align="center" gutterBottom>
                Random Call
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                {phoneNumber}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
              <Button
                variant="contained"
                startIcon={<ShuffleIcon />}
                sx={{ bgcolor: 'primary.main', color: 'white' }}
                fullWidth
                onClick={generatePhoneNumber}
              >
                Générer
              </Button>
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
              <Button
                variant="contained"
                startIcon={<CallIcon />}
                sx={{ bgcolor: 'secondary.main' }}
                fullWidth
                onClick={handleCall}
                disabled={!phoneNumber}
              >
                Appeler
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
