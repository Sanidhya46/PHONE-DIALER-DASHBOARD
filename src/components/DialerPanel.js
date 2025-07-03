import { Box, Button, TextField, Typography, Tabs, Tab } from '@mui/material';
import { useState } from 'react';

const padButtons = ['1','2','3','4','5','6','7','8','9','*','0','#'];

export default function DialerPanel() {
  const [tab, setTab] = useState(0);
  const [number, setNumber] = useState('');

  const handlePadClick = (val) => setNumber(prev => prev + val);

  const statusButtons = [
    { label: 'Break', color: '#d63384' },
    { label: 'Smoke', color: '#fd7e14' },
    { label: 'Lunch', color: '#ffc107' },
    { label: 'WC', color: '#0dcaf0' },
    { label: 'Coffee', color: '#20c997' },
    { label: 'Call Wrapup', color: '#0d6efd' },
  ];

  return (
    <Box sx={{ p: 2, bgcolor: '#0a0f3a', color: 'white', borderRadius: 2, height: '90vh' }}>
      <Tabs
        value={tab}
        onChange={(e, val) => setTab(val)}
        textColor="inherit"
        indicatorColor="secondary"
        sx={{ mb: 2 }}
      >
        <Tab label="Dial Pad" />
        <Tab label="Contacts" />
        <Tab label="Speed Dial" />
      </Tabs>

      {/* Input */}
      <TextField
        value={number}
        fullWidth
        variant="outlined"
        sx={{ input: { color: 'white' }, mb: 2 }}
      />

      {/* Dial Pad */}
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1} mb={2}>
        {padButtons.map((num, idx) => (
          <Button
            key={idx}
            variant="outlined"
            sx={{ color: 'white', borderColor: '#777' }}
            onClick={() => handlePadClick(num)}
          >
            {num}
          </Button>
        ))}
      </Box>

      {/* Call Button */}
      <Box textAlign="center" mb={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#28a745',
            borderRadius: '50%',
            width: 64,
            height: 64,
            fontSize: 28,
          }}
        >
          📞
        </Button>
      </Box>

      {/* Status Buttons */}
      {statusButtons.map((btn, idx) => (
        <Button
          key={idx}
          fullWidth
          variant="contained"
          sx={{ backgroundColor: btn.color, mb: 1 }}
        >
          {btn.label}
        </Button>
      ))}
    </Box>
  );
}
