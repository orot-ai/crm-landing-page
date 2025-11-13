import { motion } from 'framer-motion';
import Button from './ui/Button';
import CountdownTimer from './CountdownTimer';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden pt-40 pb-20">
      {/* 배경 장식 도형 - 레퍼런스처럼 큰 원형들, 모바일에서 작아짐 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 상단 도형들 */}
        <div className="absolute top-[5%] left-[5%] w-20 h-20 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-accent-pink/30 rounded-full blur-xl"></div>
        <div className="absolute top-[8%] right-[8%] w-16 h-16 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-accent-blue/25 rounded-full blur-xl"></div>

        {/* 중단 도형들 */}
        <div className="absolute top-[35%] left-[8%] w-28 h-28 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-accent-yellow/30 rounded-full blur-2xl"></div>
        <div className="absolute top-[45%] right-[12%] w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-neutral-gray-300/40 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* 제품명 - 상단 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-1"
        >
          <p
            className="text-lg md:text-h4 text-neutral-gray-700 font-bold"
            style={{ letterSpacing: '-0.02em' }}
          >
            Make Your CRM
          </p>
        </motion.div>

        {/* 메인 헤드라인 - Noto Sans KR 약간 두껍게 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[68px] leading-[1.2] text-neutral-black mb-4 md:mb-6"
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: 400,
            letterSpacing: '-0.05em'
          }}
        >
          고객 관리,<br />수작업으로 하시나요?
        </motion.h1>

        {/* 서브텍스트 - 키움 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-body-lg text-neutral-gray-500 mb-6 md:mb-8 font-normal px-4 md:px-0"
        >
          설문 접수부터 고객 관리까지,<br className="md:hidden" /> 시스템이 자동으로 처리합니다
        </motion.p>

        {/* 3가지 기능 배지 - 모든 화면에서 가로 배치, 반응형으로 크기 조절 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row justify-center items-center gap-3 sm:gap-4 md:gap-8 mb-12 md:mb-16 px-4"
        >
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-body text-neutral-gray-700">
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-medium whitespace-nowrap">자동생성</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-body text-neutral-gray-700">
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-medium whitespace-nowrap">자동발송</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-body text-neutral-gray-700">
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="font-medium whitespace-nowrap">대시보드</span>
          </div>
        </motion.div>

        {/* CTA 버튼 - 레퍼런스처럼 파란색 pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4 px-4 md:px-0"
        >
          {/* 카운트다운 타이머 */}
          <CountdownTimer />

          <Button onClick={() => scrollToSection('pricing')} size="lg" className="text-sm sm:text-base md:text-lg">
            지금 시작하기
          </Button>

          {/* 신뢰 요소 - 작게 하단 */}
          <div className="mt-4 text-xs sm:text-sm md:text-caption text-neutral-gray-400 flex flex-wrap justify-center gap-2 md:gap-3">
            <span>✓ 평생 소유</span>
            <span>✓ VOD 포함</span>
            <span>✓ 무제한 고객 관리</span>
          </div>
        </motion.div>
      </div>

      {/* CRM 시스템 화면 - CTA 버튼 아래로 이동 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 mt-0"
      >
        <div className="relative flex items-center justify-center py-4 md:py-8">
          {/* 배경 장식 도형들 - 이미지 뒤로 배치하고 위치 조정, 모바일 반응형 */}
          <div className="absolute -left-[8%] top-[5%] w-32 h-32 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-accent-orange/35 rounded-[40px] transform -rotate-12 blur-xl -z-10"></div>
          <div className="absolute -right-[6%] bottom-[5%] w-28 h-28 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-accent-pink/35 rounded-[40px] transform rotate-12 blur-xl -z-10"></div>
          <div className="absolute left-[40%] -top-[5%] w-24 h-24 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-accent-blue/25 rounded-full blur-xl -z-10"></div>
          <div className="absolute right-[15%] top-[40%] w-20 h-20 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-accent-yellow/30 rounded-full blur-xl -z-10"></div>

          {/* CRM 시스템 스크린샷 */}
          <div className="relative z-10 w-full max-w-5xl">
            <img
              src="/crm-system-screenshot.png"
              alt="CRM 시스템 화면"
              className="w-full rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{ boxShadow: '0 0 24px rgba(0, 0, 0, 0.08)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 48px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px rgba(0, 0, 0, 0.08)';
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
