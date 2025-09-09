'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-mango mb-4">
            CheMango
          </h3>
          <p className="text-gray-400 mb-8">
            Invest together, with real control.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-mango-400 transition-colors">
              Documentation
            </a>
            <a href="#" className="text-gray-400 hover:text-mango-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-mango-400 transition-colors">
              Discord
            </a>
            <a href="#" className="text-gray-400 hover:text-mango-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}