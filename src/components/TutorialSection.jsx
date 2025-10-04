import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Eye, Star } from "lucide-react";

const tutorials = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Free tutorial",
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    rating: 5.0,
    views: 1037,
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Free tutorial",
    title: "Create stunning mockups with figma prototyping tools",
    rating: 4.9,
    views: 2145,
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Free tutorial",
    title: "Master advanced design techniques for modern interfaces",
    rating: 4.8,
    views: 3256,
  },
];

export default function CircularTutorialsRight() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Carousel */}
        <div className="flex justify-center relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[420px] h-[420px] custom-swiper"
          >
            {tutorials.map((tutorial) => (
              <SwiperSlide key={tutorial.id}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                  {/* Card Image */}
                  <div className="relative h-40 sm:h-48">
                    <img
                      src={tutorial.image}
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-teal-400 text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {tutorial.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold mb-3 line-clamp-2">
                      {tutorial.title}
                    </h3>
                    <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <span className="font-semibold">{tutorial.rating}</span>
                      </div>
                      {/* Views */}
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{tutorial.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Small custom arrows */}
          <style jsx>{`
            .custom-swiper .swiper-button-prev,
            .custom-swiper .swiper-button-next {
              width: 28px;
              height: 28px;
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 50%;
              color: white;
            }
            .custom-swiper .swiper-button-prev::after,
            .custom-swiper .swiper-button-next::after {
              font-size: 12px;
              font-weight: bold;
            }
            .custom-swiper .swiper-button-prev:hover,
            .custom-swiper .swiper-button-next:hover {
              background-color: rgba(0, 0, 0, 0.7);
            }
          `}</style>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-orange-400 text-xs font-semibold tracking-widest uppercase">
            FREE TUTORIAL
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            More than thousand of free tutorial upload every weeks
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </p>
          <button className="bg-orange-100 text-orange-500 px-6 py-2.5 rounded-lg font-medium hover:bg-orange-200 transition-colors">
            Explore details
          </button>
        </div>
      </div>
    </section>
  );
}
