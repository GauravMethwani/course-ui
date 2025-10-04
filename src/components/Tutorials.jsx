import { Star } from 'lucide-react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

// Example tutorials data
const tutorials = [
  {
    image: image1,
    title: 'How to work with prototype design with Adobe XD',
    author: 'Cristian Doru Barin',
    rating: 5.0,
  },
  {
    image: image2,
    title: 'Create multiple artboards using Figma prototyping',
    author: 'Cristian Doru Barin',
    rating: 5.0,
  },
  {
    image: image3,
    title: 'Convert your web layout easily with Sketch Zeplin',
    author: 'Cristian Doru Barin',
    rating: 5.0,
  },
  // Add more items to test scrolling
  {
    image: image1,
    title: 'Extra Tutorial 1',
    author: 'Cristian Doru Barin',
    rating: 4.5,
  },
  {
    image: image2,
    title: 'Extra Tutorial 2',
    author: 'Cristian Doru Barin',
    rating: 4.8,
  },
];

export function Tutorials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-medium mb-2">Quality features</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Tutorials that people love most
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="flex space-x-6 pb-4 w-max">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="min-w-[250px] h-[400px] bg-white p-4 flex-shrink-0 shadow-lg cursor-pointer group hover:shadow-2xl transition rounded-lg"
              >
                {/* Image */}
                <div className="bg-gray-100 mb-4 flex items-center justify-center overflow-hidden h-[180px] w-full group-hover:bg-gray-200 transition-colors">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{tutorial.rating}</span>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-semibold mb-2 group-hover:text-orange-500 transition-colors text-sm">
                  {tutorial.title}
                </h3>

                {/* Author */}
                <p className="text-xs text-gray-500">{tutorial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Scroll Hint for Mobile */}
        <p className="text-center text-xs text-gray-400 mt-2 sm:hidden">
          ← Swipe left/right to view more →
        </p>
      </div>
    </section>
  );
}
