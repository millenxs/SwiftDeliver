function createFeedbackModel(db) {
    const collection = db.collection('feedback');
  
    async function insert(feedbackData) {
      const result = await collection.insertOne(feedbackData);
      return result;
    }
  
    async function findAll() {
      return await collection.find().toArray();
    }
  
    return {
      insert,
      findAll,
    };
  }
  
  module.exports = createFeedbackModel;
  