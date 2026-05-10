require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PRIVATE_APP_ACCESS = process.env.ACCESS_TOKEN;

app.get('/', async (req, res) => {
  const companies = 'https://api.hubapi.com/crm/v3/objects/companies?properties=name,domain,city,age,color,activity_status'
  const headers = {
    Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
    'Content-Type': 'application/json'
  }

  try {
    const resp = await axios.get(companies, { headers });
    const data = resp.data.results;
    res.render('homepage', { title: 'Homepage | Integrating With HubSpot I Practicum', data });
  } catch (error) {
    console.error(error);
  }
});

app.get('/update-cobj', async (req, res) => {
  try {
    res.render('updates', { title: 'Update Custom Object Form | Integrating With HubSpot I Practicum' });
  } catch (error) {
    console.error(error);
  }
});

app.post('/update-cobj', async (req, res) => {
  const update = {
    properties: {
      "name": req.body.name,
      "city": req.body.city,
      "domain": req.body.domainName,
      "age": req.body.age,
      "color": req.body.color,
      "activity_status": req.body.activityStatus
    }
  }

  const companies = 'https://api.hubapi.com/crm/v3/objects/companies'
  const headers = {
    Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
    'Content-Type': 'application/json'
  }

  try {
    await axios.post(companies, update, { headers });
    res.redirect('/');
  } catch (error) {
    console.error(error);
  }
});

// * Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));
