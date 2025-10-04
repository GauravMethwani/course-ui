import { Play, Star, Users, Clock } from "lucide-react";

const courses = [
  {
    title:
      "Professional graphic design tutorial full course with exercise file",
    students: "5,957 students",
    duration: "1 total hour",
    price: "Best Seller",
    rating: 5.0,
  },
  {
    title: "Become ultimate photoshop expert within 30 days",
    students: "5,957 students",
    duration: "1 total hour",
    price: "Best Seller",
    rating: 4.5,
  },
  {
    title: "After effects animation tutorial with photoshop documents",
    students: "5,957 students",
    duration: "1 total hour",
    price: "Best Seller",
    rating: 5.0,
  },
  {
    title: "Adobe illustrator vector art design mockup",
    students: "5,957 students",
    duration: "1 total hour",
    price: "Best Seller",
    rating: 4.5,
  },
];

export function PopularCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Popular Designing Course
          </h2>
        </div>

        {/* Course List */}
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
            >
              {/* Course Info */}
              <div className="flex items-start sm:items-center space-x-4 sm:space-x-6 flex-1 mb-4 sm:mb-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play className="w-6 h-6 text-orange-500" />
                </div>

                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex items-center flex-wrap gap-x-2 mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? "fill-orange-400 text-orange-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {course.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      {course.students}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-2">
                    {course.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enroll Button */}
              <div className="sm:ml-4">
                <button
                  className="w-full sm:w-auto px-6 py-2 text-white rounded-md transition-colors font-medium whitespace-nowrap hover:brightness-90"
                  style={{ backgroundColor: "#3FDBB1" }}
                >
                  Enrolled
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
