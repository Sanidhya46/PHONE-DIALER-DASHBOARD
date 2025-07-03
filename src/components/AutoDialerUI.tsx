import { useState } from 'react';
import {
  Tabs,
  Tab,
  TextField,
  MenuItem,
  Button,
  Paper,
  Typography,
  Avatar,
  Box,
  Grid
} from '@mui/material';
import { Phone, Email, Home } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';

// ===============================
// Contact Info Tab Component
// ===============================
const ContactTab = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6} lg={7}>
      <TextField
        select
        fullWidth
        label="Country Code"
        InputProps={{ startAdornment: <Phone /> }}
        sx={{ maxWidth: 500 }}
      >
        <MenuItem value="+91">+91 (India)</MenuItem>
        <MenuItem value="+1">+1 (USA)</MenuItem>
      </TextField>
    </Grid>

    <Grid item xs={12} md={6}>
      <TextField fullWidth label="Phone Number" InputProps={{ startAdornment: <Phone /> }} />
    </Grid>

    <Grid item xs={12} md={6}>
      <TextField fullWidth label="Alternative Phone Number" />
    </Grid>

    <Grid item xs={12} md={6}>
      <TextField fullWidth label="Address" InputProps={{ startAdornment: <Home /> }} />
    </Grid>

    <Grid item xs={12} md={6}>
      <TextField fullWidth label="Address 2" />
    </Grid>

    <Grid item xs={12} md={4}><TextField fullWidth label="City" /></Grid>
    <Grid item xs={12} md={4}><TextField fullWidth label="State" /></Grid>
    <Grid item xs={12} md={4}><TextField fullWidth label="Postal Code" /></Grid>

    <Grid item xs={12} md={6}>
      <TextField fullWidth label="Email Address" InputProps={{ startAdornment: <Email /> }} />
    </Grid>

    <Grid item xs={12} md={4}><TextField fullWidth label="Title (Mr/Ms)" /></Grid>

    <Grid item xs={12} md={4}>
      <TextField select fullWidth label="Gender">
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </TextField>
    </Grid>

    <Grid item xs={12} md={4}>
      <TextField fullWidth label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} />
    </Grid>
  </Grid>
);

// ===============================
// Comments Tab Component
// ===============================
const CommentsTab = () => (
  <Box>
    <TextField fullWidth label="Add your comment" multiline rows={6} variant="outlined" />
    <Box mt={2}>
      <Button variant="contained">Save Comment</Button>
    </Box>
  </Box>
);

// ===============================
// Script Tab Component
// ===============================
const ScriptTab = () => (
  <Box>
    <Typography variant="body1" gutterBottom>
      Hello <strong>{'{CustomerName}'}</strong>, thank you for taking our call today. Are you interested in learning more about <strong>{'{ProductName}'}</strong>?
    </Typography>
    <Box mt={2}><Button variant="outlined">Step 2: Ask Qualification Questions</Button></Box>
    <Box mt={2}><Button variant="outlined">Step 3: Provide Offer Details</Button></Box>
  </Box>
);

// ===============================
// Dialer Panel on the Right Side
// ===============================
const DialerPanel = () => {
  const [number, setNumber] = useState('');
  const [tab, setTab] = useState(0);

  const padButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  const handlePadClick = (val) => setNumber(prev => prev + val);

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: '#0a0f3a',
        color: 'white',
        height: { xs: 'auto', md: '100vh' },
        width: '100%',
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Tabs
        value={tab}
        onChange={(e, val) => setTab(val)}
        textColor="inherit"
        indicatorColor="secondary"
        sx={{ mb: 2 }}
      >
        <Tab label="Dial Pad" sx={{ fontSize: 11 }} />
        <Tab label="Contacts" sx={{ fontSize: 11 }} />
        <Tab label="Speed Dial" sx={{ fontSize: 11 }} />
      </Tabs>

      <Box sx={{ flex: 1 }}>
        <TextField
          value={number}
          fullWidth
          variant="outlined"
          sx={{
            input: { color: 'white', fontSize: '90%' },
            mb: 2,
            '& .MuiOutlinedInput-root': {
              color: 'white',
              borderColor: 'white',
            },
          }}
        />

        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1} mb={2}>
          {padButtons.map((num, idx) => (
            <Button
              key={idx}
              variant="outlined"
              sx={{ color: 'white', fontSize: '90%', borderColor: '#777' }}
              onClick={() => handlePadClick(num)}
            >
              {num}
            </Button>
          ))}
        </Box>

        <Box textAlign="center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#28a745',
              borderRadius: '50%',
              width: 50,
              height: 50,
              fontSize: 24,
            }}
          >
            📞
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

// ===============================
// Main Component
// ===============================
export default function AutoDialerUI() {
  const [tab, setTab] = useState(0);
  const tabComponents = [<ContactTab />, <CommentsTab />, <ScriptTab />];
  const tabLabels = ['Contact Info', 'Comments', 'Script'];

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom right, #4c1d95, black, #1f2937)',
        color: 'white',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flexGrow: 1,
          flexBasis: 'auto',
          minWidth: { xs: '100%', md: 0 },
          display: 'flex',
          flexDirection: 'column',
          p: { xs: 2, md: 3 },
          overflow: 'hidden',
        }}
      >
        <Paper
          elevation={8}
          sx={{
            flex: 1,
            minHeight: 300,
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Agent Header */}
          <Box display="flex" alignItems="center" p={3}>
            <Avatar sx={{ width: 64, height: 64, mr: 2 }} src="https://i.pravatar.cc/150?img=8" />
            <Typography
              variant="h6"
              sx={{ color: '#333', fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' } }}
            >
              Agent Call Assistant
            </Typography>
          </Box>

          {/* Tab Content */}
          <Box
            sx={{
              p: { xs: 2, sm: 3 },
              backgroundColor: '#f4f2ff',
              borderRadius: 2,
              borderLeft: '5px solid #673ab7',
              flex: 1,
              overflow: 'auto',
            }}
          >
            <Tabs
              value={tab}
              onChange={(e, newTab) => setTab(newTab)}
              textColor="primary"
              indicatorColor="primary"
              sx={{ mb: 2 }}
            >
              {tabLabels.map((label, index) => (
                <Tab
                  key={index}
                  label={label}
                  sx={{ fontSize: { xs: 10, sm: 12, md: 14 }, textTransform: 'none' }}
                />
              ))}
            </Tabs>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tabComponents[tab]}
              </motion.div>
            </AnimatePresence>
          </Box>
        </Paper>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: { xs: '100%', md: 300 },
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' }, 
          borderTop: { xs: '1px solid #444', md: 'none' },
        }}
      >
        <DialerPanel />
      </Box>
    </Box>
  );
}
