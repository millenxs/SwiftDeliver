const express = require('express');
const router = express.Router();

// GET route to simulate demand forecasting
router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    forecast: [
      { day: 'Monday', orders: 120 },
      { day: 'Tuesday', orders: 180 },
      { day: 'Wednesday', orders: 240 }
    ],
    stockSuggestion: 'Reinforce stock on Wednesdays and Fridays.',
    alert: 'High demand predicted for Friday.'
  });
});

module.exports = router;
