const express = require('express');
const router = express.Router();

// GET route to return a simulated dashboard overview
router.get('/', (req, res) => {
  res.json({
    dashboard: {
      totalOrdersToday: 126,
      avgDeliveryTime: '28 minutes',
      customerSatisfaction: '92%',
      revenue: '$1,845',
      alerts: [
        'Increase in demand projected for dinner hours',
        'Customer satisfaction dropped slightly on Monday'
      ]
    }
  });
});

module.exports = router;
