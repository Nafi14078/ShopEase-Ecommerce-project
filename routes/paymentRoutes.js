
const express = require('express');
const { createBkashPayment } = require('../controllers/paymentController');
const router = express.Router();


router.post('/bkash/create-payment', createBkashPayment);

module.exports = router;
