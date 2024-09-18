// backend/models/PayCommission.js
const mongoose = require('mongoose');

const PayCommissionSchema = new mongoose.Schema({
  commissionNumber: { type: Number, required: true },  // E.g., 7 for 7th Pay Commission
  effectiveDate: { type: Date, required: true },       // Date when it becomes effective (e.g., 1st Jan 2016 for 7th)
  basicPay: { type: Number, required: true },          // Base pay
  gradePay: { type: Number, required: true },          // Grade pay
  allowances: {                                        // Various allowances like HRA, DA, etc.
    type: Map,
    of: Number, 
  }
});

const PayCommission = mongoose.model('PayCommission', PayCommissionSchema);
module.exports = PayCommission;
