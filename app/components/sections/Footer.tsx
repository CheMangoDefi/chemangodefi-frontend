'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 
            className="text-2xl font-bold text-white mb-4"
            style={{
              textShadow: '3px 3px 0px rgba(0,0,0,1), -1px -1px 0px rgba(0,0,0,1), 1px -1px 0px rgba(0,0,0,1), -1px 1px 0px rgba(0,0,0,1), 0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            CheMango
          </h3>
          <p className="text-gray-400 mb-8">
          Acompañado se llega más lejos. Con CheMango,
          alcanzá tu metas grupales de manera segura y efectiva..
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-mango-400 transition-colors">
              Documentation
            </a>
            <a href="https://github.com/CheMangoDefi" className="text-gray-400 hover:text-mango-400 transition-colors">
              GitHub
            </a>
            <a href="https://x.com/CheMangoApp" className="text-gray-400 hover:text-mango-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}