const express = require('express');
const router = express.Router();

// GET route to simulate trend analysis
router.get('/', (req, res) => {
  res.json({
    trendAnalysis: {
      trendingItems: ['Spicy Ramen', 'Avocado Smoothie'],
      growthComparedToLastWeek: '18%',
      emergingPreferences: ['Low-carb meals', 'Keto desserts'],
      actionSuggestion: 'Highlight low-carb dishes on the home page this week.'
    }
  });
});

module.exports = router;
