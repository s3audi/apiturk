// api/airtable.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { BASE_ID, TABLE_NAME, TOKEN } = process.env; // Vercel'den alınan env variables

  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Veri çekme hatası');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Bir hata oluştu.' });
  }
};
