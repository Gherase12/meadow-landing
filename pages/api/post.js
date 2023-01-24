import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.post(`https://grandsoft.ro/api/${req.body.type}`, req.body.fields);
    res.status(response.status).json(response.message);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}
