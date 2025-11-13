import { motion } from 'framer-motion';

export default function VideoDemo() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[8%] w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-72 h-72 bg-accent-yellow/12 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* 섹션 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.4] text-neutral-black mb-3 md:mb-4 px-4 sm:px-0"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontWeight: 600,
              letterSpacing: '-0.02em'
            }}
          >
            실제로 이렇게 작동합니다
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray-500 font-normal px-2 sm:px-0">
            설문 제출부터 자동 관리까지, 전 과정을 영상으로 확인하세요
          </p>
        </motion.div>

        {/* 비디오 컨테이너 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto"
        >
          {/* 연하늘색 프레임 래퍼 */}
          <div className="bg-sky-50 p-5 rounded-3xl" style={{ boxShadow: '0 0 32px rgba(0, 0, 0, 0.1)' }}>
            {/* 비디오 래퍼 - 2144:1080 비율 (약 2:1) */}
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: '50.37%' }}>
              <video
                className="absolute top-0 left-0 w-full h-full object-contain bg-black"
                autoPlay
                muted
                playsInline
                loop
              >
                <source src="/demo-video-combined.mp4" type="video/mp4" />
                브라우저가 비디오 재생을 지원하지 않습니다.
              </video>
            </div>
          </div>
        </motion.div>

        {/* 하단 설명 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs sm:text-sm md:text-base text-neutral-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>설문 제출 즉시 DB 생성</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>자동 메시지 발송</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>실시간 대시보드 확인</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
