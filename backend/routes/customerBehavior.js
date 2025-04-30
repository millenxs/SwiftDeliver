const express = require('express');
const router = express.Router();

// GET route to simulate customer behavior analysis
router.get('/', (req, res) => {
  res.json({
    customerBehavior: {
      peakHours: ['12:00 PM', '07:30 PM'],
      busiestDays: ['Friday', 'Saturday'],
      favoriteDishes: ['Pepperoni Pizza', 'Vegan Combo', 'Chicken Lasagna'],
      customerReturnRate: '72%',
      marketingSuggestion: 'Launch promotions on Fridays after 6 PM.'
    }
  });
});

module.exports = router;
