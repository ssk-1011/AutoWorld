import Image from 'next/image';

const About = () => {
  const companyInfo = {
    founded: '2010',
    employees: '500+',
    locations: '25+',
    customers: '50,000+'
  };

  const services = [
    {
      title: 'Vehicle Sales',
      description: 'Wide range of new and pre-owned vehicles from top manufacturers',
      icon: '🚗'
    },
    {
      title: 'Financing',
      description: 'Flexible financing options and competitive interest rates',
      icon: '💰'
    },
    {
      title: 'Maintenance',
      description: 'Professional service and maintenance by certified technicians',
      icon: '🔧'
    },
    {
      title: 'Trade-In',
      description: 'Fair market value for your current vehicle',
      icon: '🔄'
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Best Auto Dealer',
      description: 'Recognized as the top auto dealer in the region'
    },
    {
      year: '2022',
      title: 'Customer Satisfaction',
      description: 'Achieved 98% customer satisfaction rating'
    },
    {
      year: '2021',
      title: 'Green Initiative',
      description: 'Launched eco-friendly vehicle program'
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About AutoWorld</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in automotive excellence since 2010. We bring you the finest selection of cars and motorcycles from around the world.
        </p>
      </section>

      {/* Company Stats */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {Object.entries(companyInfo).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">{value}</div>
                <div className="text-gray-600 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2010, AutoWorld began with a simple mission: to provide exceptional vehicles and service to our customers. What started as a small dealership has grown into one of the region's most trusted automotive retailers.
            </p>
            <p className="text-gray-600">
              Today, we continue to uphold our commitment to quality, transparency, and customer satisfaction. Our team of experienced professionals is dedicated to helping you find the perfect vehicle that matches your lifestyle and needs.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/about/showroom.jpg"
              alt="AutoWorld Showroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <div className="text-blue-600 font-semibold">{achievement.year}</div>
              <h3 className="text-xl font-bold mt-2">{achievement.title}</h3>
              <p className="text-gray-600 mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto">
              To provide exceptional automotive experiences through quality vehicles, transparent service, and unwavering commitment to customer satisfaction.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-xl max-w-3xl mx-auto">
              To be the most trusted name in automotive retail, known for our integrity, innovation, and dedication to excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 