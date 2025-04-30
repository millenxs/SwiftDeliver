const express = require('express');
const router = express.Router();

// GET route to return sample feedback analysis
router.get('/', (req, res) => {
  res.json({
    feedbackAnalysis: {
      positive: 78,
      negative: 22,
      keywords: ['fast delivery', 'hot food', 'delay', 'small portions']
    }
  });
});

// POST route to simulate AI-based sentiment analysis from comments
router.post('/', (req, res) => {
  const { comments } = req.body;

  const analysis = {
    totalComments: comments?.length || 0,
    sentiment: {
      positive: 6,
      neutral: 2,
      negative: 2
    },
    highlight: 'Customers highly praised the fast delivery!'
  };

  res.json(analysis);
});

module.exports = router;
