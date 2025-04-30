const express = require('express');
const router = express.Router();

// GET route to simulate personalized customer recommendations
router.get('/', (req, res) => {
  res.json({
    recommendations: [
      {
        customerId: '123',
        suggestion: 'Offer 10% off on Vegan Burger Combo'
      },
      {
        customerId: '456',
        suggestion: 'Recommend Chicken Alfredo Pasta based on recent orders'
      }
    ],
    generalTip: 'Use order history to boost loyalty through relevant offers.'
  });
});

module.exports = router;
