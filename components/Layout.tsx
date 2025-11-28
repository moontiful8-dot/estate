import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../constants';
import { Menu, X, Phone, MapPin, Award } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-primary font-sans bg-paper-texture flex flex-col items-center">
      {/* Top Gold Border */}
      <div className="w-full h-2 bg-secondary fixed top-0 z-50 shadow-md" />

      {/* Wrapper to simulate paper/document width */}
      <div className="w-full max-w-screen-xl bg-surface min-h-screen shadow-2xl flex flex-col my-0 md:my-8 relative">
        
        {/* Header */}
        <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-gray-100 px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-secondary" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight text-primary">박동산</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Real Estate Expert</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {NAVIGATION.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-secondary ${
                      isActive ? 'text-secondary font-bold decoration-secondary underline-offset-8 underline decoration-2' : 'text-gray-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-gray-100 py-4 px-6 shadow-lg flex flex-col gap-4 animate-fadeIn">
              {NAVIGATION.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 border-b border-gray-50 ${
                      isActive ? 'text-secondary' : 'text-gray-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white p-10 mt-auto border-t-4 border-secondary">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-secondary">박동산 공인중개사무소</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                귀하의 소중한 자산, 20년의 경험과 데이터로 지켜드립니다.<br/>
                신뢰할 수 있는 파트너가 되어드리겠습니다.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>서울시 강남구 테헤란로 123, 4층</span>
              </div>
            </div>
            <div className="flex flex-col md:items-end justify-center">
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-1">상담 문의</p>
                <div className="flex items-center gap-2 justify-end mb-4">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="text-xl font-bold">02-1234-5678</span>
                </div>
                <p className="text-xs text-gray-500">© 2024 Park Dong-san Real Estate. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Layout;