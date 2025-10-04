export function Statistics() {
  const stats = [
    { value: '80K+', label: 'We have more than students', color: 'text-orange-400' },
    { value: '150+', label: 'Free online tutorials videos available', color: 'text-orange-400' },
    { value: '90+', label: 'Daily updated blog post maintain', color: 'text-pink-400' },
    { value: '& 3M', label: 'Job placement', color: 'text-orange-400' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex justify-center ${index % 2 === 1 ? 'sm:mt-10' : ''}`}
              >
                <div className="w-[100%] max-w-[280px] h-[280px] bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className={`text-5xl font-bold ${stat.color} mb-4`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-600 text-base leading-snug px-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div>
            <p className="text-orange-500 text-sm font-medium mb-3">Our Achievement</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mb-5">
              Smart Jackpots<br />
              that you may love<br />
              anytime & anywhere
            </h2>
            <p className="text-gray-600 mb-6 text-base">
              The rise of mobile devices transforms the way we consume information entirely and the world's most relevant channels such as Facebook.
            </p>
            <button className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-md transition-colors font-medium">
              Explore details
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
