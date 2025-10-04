import { useState } from 'react';

const faqs = [
  {
    question: 'Where will I find my desired training?',
    answer: 'Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your blood tests delivered at let home collect sample.'
  },
  {
    question: 'How important really is to update wordpress education?',
    answer: 'Regular updates ensure security, performance improvements, and access to the latest features for your learning platform.'
  },
  {
    question: 'Magazine, newspaper, blog, media & PRO theme launched?',
    answer: 'Our platform supports various content formats and themes to enhance your learning experience.'
  },
  {
    question: 'Why should choose Educavo among others?',
    answer: 'We provide comprehensive courses, expert instructors, and a supportive community for learners.'
  },
  {
    question: 'How many times I need to give my final project?',
    answer: 'You can submit your final project once, with the option to make revisions based on feedback.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Do you have any question
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200" // only bottom border
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-start space-x-4 p-6 text-left hover:bg-gray-50 transition-colors"
              >
                {/* Plus / Minus on left */}
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold mt-1"
                  style={{ backgroundColor: '#3FDBB1' }}
                >
                  {openIndex === index ? '-' : '+'}
                </span>

                <span className="font-semibold text-gray-900">{faq.question}</span>
              </button>

              {openIndex === index && (
                <div className="px-14 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
