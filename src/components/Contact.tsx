import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#f0f8ff' }}>
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
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
            추가 문의
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray-500 font-normal px-2 sm:px-0">
            궁금한 점이 있으신가요?
          </p>
        </motion.div>

        {/* 문의 카드들 */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* 카카오톡 채널톡 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href="http://pf.kakao.com/_gcMxkn"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 00-.656-.681l-1.993 1.934a.566.566 0 01-.793 0L13.93 8.955a1.49 1.49 0 00-2.104 0l-2.829 2.829-1.471-1.424a.472.472 0 00-.656.681l1.995 1.934a.566.566 0 00.793 0l2.829-2.829a.507.507 0 01.717 0l2.005 1.934a1.49 1.49 0 002.104 0z"/>
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-neutral-black mb-3">
                카카오톡 채널톡
              </h4>
              <p className="text-sm sm:text-base text-neutral-gray-600">
                실시간 문의
              </p>
            </a>
          </motion.div>

          {/* 이메일 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:miri@orot-ai.com"
              className="block bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-neutral-black mb-3">
                이메일
              </h4>
              <p className="text-sm sm:text-base text-neutral-gray-600">
                miri@orot-ai.com
              </p>
            </a>
          </motion.div>

          {/* 유튜브 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://youtube.com/channel/UCZS5EalNT9Bx2KH4LPErfyA?si=tpErfXVfhHxbhDX0"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-neutral-black mb-3">
                유튜브
              </h4>
              <p className="text-sm sm:text-base text-neutral-gray-600">
                채널 보러가기
              </p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
