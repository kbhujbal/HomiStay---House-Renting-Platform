const mongoose = require('mongoose');
const Listing = require('../models/Listing');
require('dotenv').config();

const testListings = [
  {
    creator: "67dfafe99dfc63b2744588d3",
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
  },
  {
    creator: "67dfafe99dfc63b2744588d3",
    category: "Beach",
    type: "Apartment",
    streetAddress: "456 Ocean Drive",
    aptSuite: "Apt 3B",
    city: "Miami",
    province: "Florida",
    country: "USA",
    guestCount: 2,
    bedroomCount: 1,
    bedCount: 2,
    bathroomCount: 1,
    amenities: ["WiFi", "Gym", "Parking"],
    listingPhotoPaths: ["/uploads/beach-apartment.jpg"],
    title: "Luxury Beach Apartment",
    description: "Modern apartment with stunning ocean views",
    highlight: "Modern Design",
    highlightDesc: "Recently renovated with premium finishes",
    price: 150
  },
  {
    creator: "67dfafe99dfc63b2744588d3",
    category: "Mountain",
    type: "Cabin",
    streetAddress: "789 Mountain View",
    aptSuite: "Cabin 5",
    city: "Aspen",
    province: "Colorado",
    country: "USA",
    guestCount: 6,
    bedroomCount: 3,
    bedCount: 4,
    bathroomCount: 2,
    amenities: ["WiFi", "Fireplace", "Ski Storage"],
    listingPhotoPaths: ["/uploads/mountain-cabin.jpg"],
    title: "Cozy Mountain Cabin",
    description: "Perfect for winter getaways",
    highlight: "Ski Access",
    highlightDesc: "Minutes from the slopes",
    price: 250
  },
  {
    creator: "67dfafe99dfc63b2744588d3",
    category: "City",
    type: "Apartment",
    streetAddress: "321 Downtown Ave",
    aptSuite: "Apt 12C",
    city: "New York",
    province: "NY",
    country: "USA",
    guestCount: 3,
    bedroomCount: 2,
    bedCount: 2,
    bathroomCount: 1,
    amenities: ["WiFi", "Gym", "Doorman"],
    listingPhotoPaths: ["/uploads/city-apartment.jpg"],
    title: "Downtown Luxury Apartment",
    description: "Modern apartment in the heart of the city",
    highlight: "City Views",
    highlightDesc: "Spectacular skyline views",
    price: 300
  },
  {
    creator: "67dfafe99dfc63b2744588d3",
    category: "Countryside",
    type: "Farmhouse",
    streetAddress: "567 Rural Road",
    aptSuite: "Farmhouse 1",
    city: "Vermont",
    province: "VT",
    country: "USA",
    guestCount: 8,
    bedroomCount: 4,
    bedCount: 6,
    bathroomCount: 3,
    amenities: ["WiFi", "Farm Access", "Fire Pit"],
    listingPhotoPaths: ["/uploads/farmhouse.jpg"],
    title: "Rustic Farmhouse",
    description: "Experience country living at its finest",
    highlight: "Farm Experience",
    highlightDesc: "Working farm with fresh produce",
    price: 180
  }
];

async function createMultipleListings() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Dream_Nest",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    // Clear existing listings
    await Listing.deleteMany({});
    
    // Insert new listings
    for (const listing of testListings) {
      const newListing = new Listing(listing);
      await newListing.save();
    }
    
    console.log('Multiple test listings created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating test listings:', error);
    process.exit(1);
  }
}

createMultipleListings(); 