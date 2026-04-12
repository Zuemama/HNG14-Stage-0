const axios = require('axios');
const Classification = require('../models/userModel');
// const genderizeUrl = require('../configs/api');

exports.classifyName = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ status: 'error', message: 'Missing name parameter' });
  }

  try {
    const response = await axios.get(  'https://api.genderize.io',
 {
      params: { name}
    });

    const { gender, probability, count } = response.data;

    if (!gender || probability === 0) {
      return res.json({
        status: 'error',
        message: `Could not determine gender for ${name} and probability is 0`
      });
    }
    const classification = new Classification({ name, gender, probability, count });

    res.json({ status: 'success', data: classification });
 } catch (err) {
  console.error('Genderize API error:', err.response ? err.response.data : err.message);
  res.status(500).json({ status: 'error', message: 'Failed to fetch from Genderize API' });
}
};



//  } catch (err) {
//     res.status(500).json({ status: 'error', message: 'Failed to fetch from Genderize API' });
//   }