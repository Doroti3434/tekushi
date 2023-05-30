const fetch = require('node-fetch');
app.get('/random-cat', async (req, res) => {
    try {
      const response = await fetch('https://cataas.com/cat');
      const imageBuffer = await response.buffer();
      res.set('Content-Type', 'image/jpeg');
      res.send(imageBuffer);
    } catch (error) {
      console.error('Error retrieving cat image: ', error);
      res.status(500).send('Error retrieving cat image');
    }
  });
  
  const imageUrl = 'https://cataas.com/cat';

connection.query('INSERT INTO requests (image_url) VALUES (?)', [imageUrl], (error) => {
  if (error) {
    console.error('Error saving cat request to database: ', error);
  }
});
