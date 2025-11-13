import { motion } from 'framer-motion';

export default function Section3() {
  const beforeItems = [
    '엑셀 파일 3개 왔다갔다',
    '"어디 적었더라?" 검색 중',
    '10분 증발',
    '하루 종일 쫓깁니다'
  ];

  const afterItems = [
    '커피 마시며 대시보드 확인',
    '설문 접수 → 자동 DB 생성 → 자동 발송',
    '모든 게 돌아가는 걸 눈으로 확인',
    '본질에만 집중합니다'
  ];

  return (
    <section className="relative py-20 md:py-32 bg-[#FAFAFA] overflow-hidden">
      {/* 배경 장식 도형 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-56 h-56 sm:w-72 sm:h-72 bg-accent-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-64 h-64 sm:w-80 sm:h-80 bg-accent-blue/10 rounded-full blur-3xl"></div>
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
            시스템 도입 3개월 후,<br />
            당신의 하루는 완전히 달라집니다
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray-500 font-normal px-2 sm:px-0">
            수작업에 쫓기던 일과에서 전략에 집중하는 일과로
          </p>
        </motion.div>

        {/* Before/After 비교 */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10"
            style={{ boxShadow: '0 0 24px rgba(0, 0, 0, 0.08)' }}
          >
            <div className="mb-6 md:mb-8">
              <span className="inline-block px-4 py-2 bg-neutral-gray-100 rounded-full text-sm md:text-base font-semibold text-neutral-gray-700 mb-3">
                Before
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-black">
                지금
              </h3>
            </div>

            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-neutral-gray-400"></div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-gray-600 leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 ring-2 ring-primary/20"
            style={{ boxShadow: '0 0 24px rgba(0, 0, 0, 0.08)' }}
          >
            <div className="mb-6 md:mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm md:text-base font-semibold text-primary mb-3">
                After
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-black">
                시스템 도입 후
              </h3>
            </div>

            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-gray-700 leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 하단 강조 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-black mb-3">
            하루 2-3시간 = 월 40-60시간 확보
          </p>
          <p className="text-base sm:text-lg md:text-xl text-neutral-gray-600">
            시스템이 돌아가는 동안,<br className="sm:hidden" /> 당신은 정말 하고 싶었던 일을 합니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
