const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const testUser = {
  firstName: "Test",
  lastName: "User",
  email: "test@example.com",
  password: "test123", // In a real app, this should be hashed
  profileImagePath: "/uploads/test-user.jpg",
  wishList: [],
  propertyList: [],
  reservationList: [],
  tripList: []
};

async function createTestUser() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Dream_Nest",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    const user = new User(testUser);
    await user.save();
    console.log('Test user created successfully');
    console.log('User ID:', user._id);
    process.exit(0);
  } catch (error) {
    console.error('Error creating test user:', error);
    process.exit(1);
  }
}

createTestUser(); 