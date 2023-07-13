import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

import { Feed, VideoDetails, ChannelDetails, Navbar, SearchFeed } from './components'


function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        < Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" exact element={<VideoDetails />}></Route>
          <Route path="/channel/:id" exact element={<ChannelDetails />}></Route>
          <Route path="/search/:searchTerm" exact element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
