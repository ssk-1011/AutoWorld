import Link from 'next/link';
import { cars } from '../data/cars';
import { bikes } from '../data/bikes';

const Home = () => {
  // Get 4 featured vehicles (2 cars and 2 bikes)
  const featuredVehicles = [
    {
      id: cars[0].id,
      type: 'car',
      name: cars[0].name,
      price: cars[0].price,
      image: cars[0].image,
      description: cars[0].description,
      discount: '15% OFF'
    },
    {
      id: bikes[0].id,
      type: 'bike',
      name: bikes[0].name,
      price: bikes[0].price,
      image: bikes[0].image,
      description: bikes[0].description,
      discount: '10% OFF'
    },
    {
      id: cars[1].id,
      type: 'car',
      name: cars[1].name,
      price: cars[1].price,
      image: cars[1].image,
      description: cars[1].description,
      discount: '12% OFF'
    },
    {
      id: bikes[1].id,
      type: 'bike',
      name: bikes[1].name,
      price: bikes[1].price,
      image: bikes[1].image,
      description: bikes[1].description,
      discount: '8% OFF'
    }
  ];

  const specialOffers = [
    {
      title: 'Summer Sale',
      description: 'Get up to 20% off on selected vehicles',
      validUntil: 'August 31, 2024',
      code: 'SUMMER2024'
    },
    {
      title: 'First Time Buyer',
      description: 'Special financing options available',
      validUntil: 'December 31, 2024',
      code: 'FIRSTBUY'
    }
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to AutoWorld</h1>
        <p className="text-xl text-gray-600">Your Premium Destination for Cars and Motorcycles</p>
      </section>

      {/* Special Offers */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {specialOffers.map((offer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">{offer.title}</h3>
              <p className="text-gray-600 mt-2">{offer.description}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Valid until: {offer.validUntil}</p>
                <p className="text-sm font-medium mt-1">Use code: <span className="text-blue-600">{offer.code}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Vehicles */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Vehicles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.discount}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                <p className="text-gray-600 mt-1">{vehicle.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">{vehicle.price}</span>
                  <Link
                    href={`/${vehicle.type}s`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Vehicle?</h2>
        <p className="text-xl mb-8">Explore our extensive collection of premium cars and motorcycles</p>
        <div className="space-x-4">
          <Link
            href="/cars"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Browse Cars
          </Link>
          <Link
            href="/bikes"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Browse Bikes
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 
 