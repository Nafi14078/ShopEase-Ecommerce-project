import axios from 'axios';

const handleBkashPayment = async () => {
  try {
    const res = await axios.post('/api/payment/bkash/create-payment', {
      amount: 500 
    });
    window.location.href = res.data.bkashURL; 
  } catch (error) {
    console.error(error);
    alert('Failed to start bKash payment.');
  }
};

<button onClick={handleBkashPayment} className="btn btn-pink">
  Pay with bKash
</button>
