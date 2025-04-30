const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');

// Importar rotas
const forecast = require('./routes/forecast');
const optimizeRoutes = require('./routes/optimizeRoutes');
const feedback = require('./routes/feedback');
const recommendations = require('./routes/recommendations');
const dashboard = require('./routes/dashboard');
const alerts = require('./routes/alerts');
const customerBehavior = require('./routes/customerBehavior');
const inventoryPrediction = require('./routes/inventoryPrediction');
const trendAnalysis = require('./routes/trendAnalysis');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/forecast-demand', forecast);
app.use('/optimize-routes', optimizeRoutes);
app.use('/feedback-analysis', feedback);
app.use('/personalized-recommendations', recommendations);
app.use('/dashboard-overview', dashboard);
app.use('/alerts', alerts);
app.use('/customer-behavior', customerBehavior);
app.use('/inventory-prediction', inventoryPrediction);
app.use('/trend-analysis', trendAnalysis);

// Health check
app.get('/', (req, res) => {
    res.send('🚀 API Inteligente para Delivery funcionando!');
});

// Conectar ao MongoDB e iniciar o servidor
connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database:', err);
});
