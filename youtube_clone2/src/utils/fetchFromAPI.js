const axios = require('axios');

const BaseUrl = 'https://youtube-v31.p.rapidapi.com';
const options = {

    
    params: {
      
      maxResults: '50'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url)=>{
   const {data} =await axios.get(`${BaseUrl}/${url}`, options);
   return data;
  }