const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  policyNumber: {
    type: String,
    required: true,
  },
  policyholderName: {
    type: String,
    required: true,
  },
  policyType: {
    type: String,
    required: true,
  },
  premiumAmount: {
    type: Number,
    required: true,
  },
  riders: [String], // Array of riders (if any)
  dateOfIssue: {
    type: Date,
    default: Date.now,
  },
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
