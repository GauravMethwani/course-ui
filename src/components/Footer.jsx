const footerLinks = {
  'About Us': ['Support Center', 'Customer Support', 'About Us', 'Copyright', 'Popular Campaign'],
  'Our Information': ['Return Policy', 'Privacy Policy', 'Terms & Conditions', 'Site Map', 'Store Hours'],
  'My Account': ['Press inquiries', 'Social media', 'directories', 'Images & B-roll', 'Permissions'],
  'Policy': ['Application security', 'Software principles', 'Unwanted software policy', 'Responsible supply chain']
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>© 2024 Learnguru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
