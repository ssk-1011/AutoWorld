'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function VehicleCard({ vehicle, type }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: vehicle.id,
      type: type,
      name: vehicle.name,
      price: vehicle.price,
      image: vehicle.image,
      description: vehicle.description
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{vehicle.name}</h3>
        <p className="text-gray-600 mt-1">{vehicle.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">{vehicle.price}</span>
          <div className="space-x-2">
            <Link
              href={`/${type}s/${vehicle.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 