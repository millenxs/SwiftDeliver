const express = require('express');
const router = express.Router();

// GET route to simulate inventory prediction
router.get('/', (req, res) => {
  res.json({
    inventoryPrediction: {
      lowStockItems: ['Mozzarella Cheese', 'Tomato Sauce', 'Packaging'],
      suggestedRestock: {
        mozzarellaCheese: '20kg',
        tomatoSauce: '15L',
        packaging: '500 units'
      },
      restockAlert: 'High demand expected this weekend. Consider increasing stock by 30%.'
    }
  });
});

module.exports = router;
