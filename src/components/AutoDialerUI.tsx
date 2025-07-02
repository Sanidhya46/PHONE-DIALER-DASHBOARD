import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { TextField, MenuItem, Button, Paper, Typography, Avatar, Box } from '@mui/material';
import { Phone, Email, Home } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

// Contact Tab

const ContactTab = () => (
  <Grid container spacing={4}>
    <Grid item xs={12} md={6} lg={7}><TextField
    select
    fullWidth
    label="Country Code"  InputProps={{ startAdornment: <Phone /> }} 
    sx={{ maxWidth: 500 }} // or width: 400
    
  >
      <MenuItem value="+91">+91 (India)</MenuItem>
      <MenuItem value="+1">+1 (USA)</MenuItem>
    </TextField></Grid>
    <Grid item xs={12} md={6}><TextField fullWidth label="Phone Number" InputProps={{ startAdornment: <Phone /> }} /></Grid>
    <Grid item xs={12} md={6}><TextField fullWidth label="Alternative Phone Number" /></Grid>
    <Grid item xs={12} md={6}><TextField fullWidth label="Address" InputProps={{ startAdornment: <Home /> }} /></Grid>
    <Grid item xs={12} md={6}><TextField fullWidth label="Address 2" /></Grid>
    <Grid item xs={12} md={4}><TextField fullWidth label="City" /></Grid>
    <Grid item xs={12} md={4}><TextField fullWidth label="State" /></Grid>
    <Grid item xs={12} md={4}><TextField fullWidth label="Postal Code" /></Grid>
    <Grid item xs={12} md={6}><TextField fullWidth label="Email Address" InputProps={{ startAdornment: <Email /> }} /></Grid>
    <Grid item xs={12} md={4}><TextField fullWidth label="Title (Mr/Ms)" /></Grid>
    <Grid item xs={12} md={4}><TextField select fullWidth label="Gender">
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
    </TextField></Grid>
    <Grid item xs={12} md={4}><TextField fullWidth label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} /></Grid>
  </Grid>
);

// Comments Tab
const CommentsTab = () => (
  <Box>
    <TextField fullWidth label="Add your comment" multiline rows={6} variant="outlined" />
    <Box mt={2}><Button variant="contained">Save Comment</Button></Box>
  </Box>
);

// Script Tab
const ScriptTab = () => (
  <Box>
    <Typography variant="body1" gutterBottom>
      Hello <strong>{'{CustomerName}'}</strong>, thank you for taking our call today. Are you interested in learning more about <strong>{'{ProductName}'}</strong>?
    </Typography>
    <Box mt={2}><Button variant="outlined">Step 2: Ask Qualification Questions</Button></Box>
    <Box mt={2}><Button variant="outlined">Step 3: Provide Offer Details</Button></Box>
  </Box>
);

export default function AutoDialerUI() {
  const [tab, setTab] = useState(0);

  const tabComponents = [<ContactTab />, <CommentsTab />, <ScriptTab />];
  const tabLabels = ['Contact Info', 'Comments', 'Script'];

  return (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white overflow-y-auto animate-backgroundScroll">
    <div className="backdrop-blur-sm   bg-'#ffabf2' h-[50vh] py-1.5 px-8">
      <Paper
        elevation={8}
        sx={{
          p: 8,
          width: '95vw',
          height: '90vh',
          mx: 'auto',
          mt: 4,
          borderRadius: 3,
        }}
      >
        <Box display="flex" alignItems="center" mb={3}>
          <Avatar sx={{ width: 72, height: 72, mr: 2, }} src="https://i.pravatar.cc/150?img=8" />
          <Typography variant="h5" sx={{ color: '#333' }}>Agent Call Assistant</Typography>
        </Box>
          <Box
  sx={{
    p: 3,
    backgroundColor: '#f4f2ff',
    borderRadius: 2,
    // boxShadow: 4,
    mt: 2,
    borderLeft: '5px solid #673ab7',
  }}
>
        <Tabs
          value={tab}
          onChange={(e, newTab) => setTab(newTab)}
          textColor="primary"
          indicatorColor="primary"
          sx={{ mb: 3 }}
        >
          {tabLabels.map((label, index) => <Tab key={index} label={label} />)}
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
    </div>
  </div>
);

}
