'use client';
import Image from 'next/image';
import { bikes } from '../data/bikes';

export default function BikeSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Premium Motorcycles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bikes.map((bike) => (
          <div key={bike.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={bike.image}
                alt={bike.name}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{bike.name}</h2>
              <p className="text-gray-600 mb-4">{bike.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">{bike.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 