import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // 헤더 높이
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <div className="flex items-center">
            <h1
              className="text-xl md:text-2xl font-bold text-neutral-black cursor-pointer"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Make Your CRM
            </h1>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-neutral-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              핵심 기능
            </button>
            <button
              onClick={() => scrollToSection('price-comparison')}
              className="text-neutral-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              가격
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-neutral-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              지금 시작하기
            </button>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6 text-neutral-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-gray-200"
          >
            <nav className="flex flex-col py-4 gap-2">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left px-4 py-3 text-neutral-gray-700 hover:bg-neutral-gray-50 hover:text-primary transition-colors duration-300 font-medium"
              >
                핵심 기능
              </button>
              <button
                onClick={() => scrollToSection('price-comparison')}
                className="text-left px-4 py-3 text-neutral-gray-700 hover:bg-neutral-gray-50 hover:text-primary transition-colors duration-300 font-medium"
              >
                가격
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left px-4 py-3 text-neutral-gray-700 hover:bg-neutral-gray-50 hover:text-primary transition-colors duration-300 font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="mx-4 mt-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 text-center"
              >
                지금 시작하기
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
