
const axios = require('axios');


const BKASH_APP_KEY = process.env.BKASH_APP_KEY;
const BKASH_APP_SECRET = process.env.BKASH_APP_SECRET;
const BKASH_USERNAME = process.env.BKASH_USERNAME;
const BKASH_PASSWORD = process.env.BKASH_PASSWORD;

const BKASH_BASE_URL = 'https://tokenized.sandbox.bka.sh/v1.2.0-beta';
let idToken = "";

async function getToken() {
  const res = await axios.post(`${BKASH_BASE_URL}/checkout/token/grant`, {
    app_key: BKASH_APP_KEY,
    app_secret: BKASH_APP_SECRET
  }, {
    headers: {
      username: BKASH_USERNAME,
      password: BKASH_PASSWORD
    }
  });
  idToken = res.data.id_token;
}


const createBkashPayment = async (req, res) => {
  try {
    await getToken();

    const createResponse = await axios.post(`${BKASH_BASE_URL}/checkout/create`, {
      amount: req.body.amount,
      currency: "BDT",
      intent: "sale",
      merchantInvoiceNumber: "Inv" + Date.now()
    }, {
      headers: {
        authorization: idToken,
        'X-APP-Key': BKASH_APP_KEY
      }
    });

    res.json({ bkashURL: createResponse.data.bkashURL });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send('bKash Payment Creation Failed');
  }
};

module.exports = { createBkashPayment };
