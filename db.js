const { MongoClient } = require('mongodb');

// Conexão com o MongoDB
let db;

const connectDB = async () => {
  try {
    const client = await MongoClient.connect('mongodb+srv://root:root@cluster0.uwdypzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    db = client.db('deliveryAI');
    console.log('✅ Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra o processo em caso de falha de conexão
  }
};

const getDB = () => {
  if (!db) throw new Error('Database not connected');
  return db;
};

module.exports = { connectDB, getDB };
