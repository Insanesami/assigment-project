const express = require('express');
const Policy = require('../models/policyModel'); 
const mongoose = require("mongoose") // Import the Policy model

const app = express();
app.use(express.json());

require('dotenv').config();
 // This should print your MongoDB URL
// MongoDB Connection
const URL = process.env.MONGO_URL;


 // This should print your MongoDB connection URI
const mongooseconnect = function(){

  mongoose.connect(URL)
  .then(() => {
    console.log('MongoDB Connected...'  ,URL);
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


}




// Example POST endpoint to add a policy
app.post('/api/policies', async (req, res) => {
  try {
    const { policyNumber, policyholderName, policyType, premiumAmount, riders } = req.body;

    const newPolicy = new Policy({
      policyNumber,
      policyholderName,
      policyType,
      premiumAmount,
      riders,
    });

    await newPolicy.save();
    res.status(201).send(newPolicy);
  } catch (err) {
    res.status(400).send('Error saving policy: ' + err.message);
  }
});

// Example GET endpoint to get all policies
app.get('/api/policies', async (req, res) => {
  try {
    const policies = await Policy.find();
    res.status(200).json(policies);
  } catch (err) {
    res.status(400).send('Error retrieving policies: ' + err.message);
  }
});

//Server setup
// const PORT = process.env.PORT || 4003;
// app.listen(PORT, () => {
//   console.log("Server is running on port  500");
// });

module.exports = mongooseconnect;
