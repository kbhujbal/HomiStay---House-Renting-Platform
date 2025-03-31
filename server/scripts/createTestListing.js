const mongoose = require('mongoose');
const Listing = require('../models/Listing');
require('dotenv').config();

const testListing = {
  creator: "67dfafe99dfc63b2744588d3", // Using the real user ID we just created
  category: "Beach",
  type: "House",
  streetAddress: "123 Beach Road",
  aptSuite: "Suite 1",
  city: "Miami",
  province: "Florida",
  country: "USA",
  guestCount: 4,
  bedroomCount: 2,
  bedCount: 3,
  bathroomCount: 2,
  amenities: ["WiFi", "Pool", "Parking"],
  listingPhotoPaths: ["/uploads/beach-house.jpg"],
  title: "Beautiful Beach House",
  description: "A stunning beach house with ocean views",
  highlight: "Ocean View",
  highlightDesc: "Direct access to the beach",
  price: 200
};

async function createTestListing() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Dream_Nest",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    const listing = new Listing(testListing);
    await listing.save();
    console.log('Test listing created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating test listing:', error);
    process.exit(1);
  }
}

createTestListing(); 