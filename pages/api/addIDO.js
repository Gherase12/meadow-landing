import axios from 'axios';

export default async function handler(req, res) {
  try {
    const {data} = req.body
    
    const response = await axios.post(`https://grandsoft.ro/api/addLaunch`, data);
   
    res.status(response.status).json({message: response.data.message});
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}
