# HomiStay - House Renting Platform

HomiStay is a modern house renting platform that allows users to browse, book, and manage property rentals. The platform features a user-friendly interface with various property categories and detailed listings.

## Features

### For Guests
- Browse properties by category (Beach, Mountain, City, Countryside)
- Search properties by location and type
- View detailed property information including:
  - High-quality property images
  - Amenities and facilities
  - Guest capacity
  - Pricing details
  - Location information
- Book properties with date selection
- View booking history and trips
- Create wishlists for favorite properties

### For Hosts
- List properties with detailed information
- Upload multiple property images
- Set pricing and availability
- Manage property listings
- Track bookings and reservations
- View earnings and analytics

## Technologies Used

### Frontend
- React.js
- Redux for state management
- SCSS for styling
- React Router for navigation
- React Date Range for booking calendar

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads

### Database
- MongoDB
- Mongoose ODM

## Project Structure

```
HomiStay/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── redux/        # Redux state management
│   │   ├── styles/       # SCSS styles
│   │   └── App.js        # Main application component
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── models/           # MongoDB models
    ├── routes/           # API routes
    ├── public/           # Static files and uploads
    ├── scripts/          # Database seeding scripts
    └── index.js          # Server entry point
```

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/HomiStay.git
cd HomiStay
```

2. Install dependencies for both client and server:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the server directory with:
   ```
   MONGO_URL=mongodb://localhost:27017
   ```

4. Start MongoDB:
```bash
# On macOS
brew services start mongodb-community
```

5. Run the application:
```bash
# Start the server (from server directory)
cd server
node index.js

# Start the client (from client directory)
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Database Seeding

To populate the database with sample listings, run:
```bash
cd server
node scripts/createMultipleListings.js
```

## Features in Detail

### Property Categories
- Beach Properties
- Mountain Properties
- City Properties
- Countryside Properties

### Property Types
- Houses
- Apartments
- Cabins
- Farmhouses

### Amenities
- WiFi
- Pool
- Parking
- Gym
- Fireplace
- Ski Storage
- Doorman
- Farm Access
- Fire Pit

### User Features
- User Authentication
- Profile Management
- Property Management
- Booking System
- Wishlist Management
- Trip Planning

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js community for the amazing frontend framework
- MongoDB for the flexible database solution
- All contributors who have helped shape this project