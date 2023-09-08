const express = require('express');
const mongoose= require ('mongoose');
const bodyParser = require('body-parser');








const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


//const pantry = [
 // { id: 1, name: 'Basket 1', items: ['Apples', 'Bananas'] },
  //{ id: 2, name: 'Basket 2', items: ['Oranges', 'Grapes'] },
//]

// Pantry API base URL
const pantryApiBaseUrl = 'https://getpantry.cloud/apiv1/pantry/';

// Create a new basket (POST)
app.post('/pantry/:b3b78edd-a1cc-4be3-a57a-ec2008247d5e/basket/:AakritisPantry', async (req, res) => {
  const { pantry_id, basket_key } = req.params;
  const basketData = req.body;

  try {
    const response = await axios.post(`${pantryApiBaseUrl}${pantry_id}/basket/${basket_key}`, basketData);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// Read a basket (GET)
app.get('/pantry/:b3b78edd-a1cc-4be3-a57a-ec2008247d5e/basket/:AakritisPantry', async (req, res) => {
  const { pantry_id, basket_key } = req.params;

  try {
    const response = await axios.get(`${pantryApiBaseUrl}${pantry_id}/basket/${basket_key}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// List baskets in a pantry (GET)
app.get('/pantry/:b3b78edd-a1cc-4be3-a57a-ec2008247d5e', async (req, res) => {
  const { pantry_id } = req.params;

  try {
    const response = await axios.get(`${pantryApiBaseUrl}${pantry_id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// Update a basket (PUT)
app.put('/pantry/:b3b78edd-a1cc-4be3-a57a-ec2008247d5e/basket/:AakritisPantry', async (req, res) => {
  const { pantry_id, basket_key } = req.params;
  const updatedBasketData = req.body;

  try {
    const response = await axios.put(`${pantryApiBaseUrl}${b3b78edd-a1cc-4be3-a57a-ec2008247d5e}/basket/${basket_key}`, updatedBasketData);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// Delete a basket (DELETE)
app.delete('/pantry/b3b78edd-a1cc-4be3-a57a-ec2008247d5e/basket/:AakritisPantry', async (req, res) => {
  const { pantry_id, basket_key } = req.params;

  try {
    const response = await axios.delete(`${pantryApiBaseUrl}${pantry_id}/basket/${basket_key}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
