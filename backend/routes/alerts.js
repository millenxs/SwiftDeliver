const express = require('express');
const router = express.Router();

// GET route to return automated strategic alerts
router.get('/', (req, res) => {
  res.json({
    alerts: [
      'Low engagement on Monday afternoons — consider a promo.',
      'Sales spike detected every payday — prepare targeted ads.',
      'Negative reviews increased 15% this week — review delivery times.'
    ]
  });
});

module.exports = router;
