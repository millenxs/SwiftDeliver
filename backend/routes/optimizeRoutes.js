const express = require('express');
const router = express.Router();

// GET route to simulate route optimization
router.get('/', (req, res) => {
  res.json({
    routeOptimization: {
      currentDelay: '8 minutes',
      optimizedRouteETA: '22 minutes',
      recommendedRoute: [
        'Start at Main Street',
        'Take 5th Avenue',
        'Avoid traffic on Central Blvd',
        'Arrive at delivery point B'
      ],
      costReductionEstimate: '12% fuel savings per delivery'
    }
  });
});

module.exports = router;
